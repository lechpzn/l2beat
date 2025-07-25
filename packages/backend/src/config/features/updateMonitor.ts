import type { Env } from '@l2beat/backend-tools'
import type { ChainConfig } from '@l2beat/config'
import {
  ConfigReader,
  type DiscoveryChainConfig,
  getDiscoveryPaths,
  getMulticall3Config,
} from '@l2beat/discovery'
import type { DiscordConfig, UpdateMonitorConfig } from '../Config'
import type { FeatureFlags } from '../FeatureFlags'

export function getUpdateMonitorConfig(
  env: Env,
  flags: FeatureFlags,
  chains: ChainConfig[],
  isLocal: boolean | undefined,
): UpdateMonitorConfig {
  const paths = getDiscoveryPaths()
  const configReader = new ConfigReader(paths.discovery)

  const allChains = [
    ...new Set(
      configReader.readAllDiscoveredProjects().flatMap((x) => x.chains),
    ),
  ]
  const enabledChains = allChains.filter((chain) =>
    flags.isEnabled('updateMonitor', chain),
  )
  const disabledChains = allChains.filter(
    (chain) => !flags.isEnabled('updateMonitor', chain),
  )
  return {
    configReader,
    paths,
    runOnStart: isLocal
      ? env.boolean('UPDATE_MONITOR_RUN_ON_START', true)
      : undefined,
    updateDifferEnabled: flags.isEnabled('updateMonitor', 'updateDiffer'),
    discord: getDiscordConfig(env, isLocal),
    chains: enabledChains.map((chain) =>
      getChainDiscoveryConfig(env, chain, chains),
    ),
    disabledChains,
    cacheEnabled: env.optionalBoolean(['DISCOVERY_CACHE_ENABLED']),
    cacheUri: env.string(['DISCOVERY_CACHE_URI'], 'postgres'),
    updateMessagesRetentionPeriodDays: env.integer(
      ['UPDATE_MESSAGES_RETENTION_PERIOD_DAYS'],
      30,
    ),
  }
}

function getDiscordConfig(env: Env, isLocal?: boolean): DiscordConfig | false {
  const token = env.optionalString('DISCORD_TOKEN')
  const internalChannelId = env.optionalString('INTERNAL_DISCORD_CHANNEL_ID')
  const publicChannelId = env.optionalString('PUBLIC_DISCORD_CHANNEL_ID')

  const discordEnabled =
    !!token && !!internalChannelId && (isLocal || !!publicChannelId)

  return (
    discordEnabled && {
      token,
      publicChannelId,
      internalChannelId,
      callsPerMinute: 3000,
    }
  )
}

function getChainDiscoveryConfig(
  env: Env,
  chain: string,
  chains: ChainConfig[],
): DiscoveryChainConfig {
  const chainConfig = chains.find((c) => c.name === chain)
  if (!chainConfig) {
    throw new Error('Unknown chain: ' + chain)
  }

  const multicallV3 = chainConfig.multicallContracts?.find(
    (x) => x.version === '3',
  )

  const multicallConfig = multicallV3
    ? getMulticall3Config(
        multicallV3.sinceBlock,
        multicallV3.address,
        multicallV3.batchSize,
      )
    : undefined

  const explorerApi = chainConfig.apis.find(
    (x) =>
      x.type === 'etherscan' ||
      x.type === 'routescan' ||
      x.type === 'blockscout',
  )

  if (!explorerApi) {
    throw new Error('Missing explorerApi for chain: ' + chain)
  }

  const ENV_NAME = chain.toUpperCase()

  return {
    name: chainConfig.name,
    chainId: chainConfig.chainId,
    rpcUrl: env.string([
      `${ENV_NAME}_RPC_URL_FOR_DISCOVERY`,
      `${ENV_NAME}_RPC_URL`,
    ]),
    eventRpcUrl: env.optionalString(`${ENV_NAME}_EVENT_RPC_URL_FOR_DISCOVERY`),
    reorgSafeDepth: env.optionalInteger([
      `${ENV_NAME}_REORG_SAFE_DEPTH_FOR_DISCOVERY`,
      `${ENV_NAME}_REORG_SAFE_DEPTH`,
    ]),
    beaconApiUrl: env.optionalString([
      'ETHEREUM_BEACON_API_URL_FOR_DISCOVERY',
      'ETHEREUM_BEACON_API_URL',
    ]),
    celestiaApiUrl: env.optionalString([
      'CELESTIA_API_URL_FOR_DISCOVERY',
      'CELESTIA_API_URL',
    ]),
    multicall: multicallConfig,
    explorer:
      explorerApi.type === 'blockscout' || explorerApi.type === 'routescan'
        ? {
            type: explorerApi.type,
            url: explorerApi.url,
            unsupported: {
              getContractCreation: explorerApi.contractCreationUnsupported,
            },
          }
        : {
            type: explorerApi.type,
            url: env.string('ETHERSCAN_API_URL'),
            apiKey: env.string('ETHERSCAN_API_KEY'),
            // biome-ignore lint/style/noNonNullAssertion: We assume it's there since there is no etherscan for non-evm chains
            chainId: chainConfig.chainId!,
            unsupported: {
              getContractCreation: explorerApi.contractCreationUnsupported,
            },
          },
  }
}
