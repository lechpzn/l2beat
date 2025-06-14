import {
  ConfigReader,
  type ConfigRegistry,
  TemplateService,
  getChainConfig,
  getDiscoveryPaths,
} from '@l2beat/discovery'
import { boolean, command, flag, option, optional, string } from 'cmd-ts'
import { keyInYN } from 'readline-sync'
import { discoverAndUpdateDiffHistory } from '../implementations/discovery/discoveryWrapper'
import { Separated } from './types'

export const RefreshDiscovery = command({
  name: 'refresh-discovery',
  description: 'Rerun discovery on projects that need changes.',
  args: {
    all: flag({
      type: boolean,
      long: 'all',
      short: 'a',
      description: 'refreshes discovery for every project.',
    }),
    from: option({
      type: optional(string),
      long: 'from',
      short: 'f',
      description:
        'where to at which project start discovery, format <project>/<chain>.',
    }),
    confirmed: flag({
      type: boolean,
      long: 'yes',
      short: 'y',
      description: 'accept the refresh, do not prompt the user.',
    }),
    excludeProjects: option({
      type: optional(Separated(string)),
      long: 'exclude-projects',
      short: 'p',
      description: 'exclude projects from discovery, comma separated.',
    }),
    excludeChains: option({
      type: optional(Separated(string)),
      long: 'exclude-chains',
      short: 'c',
      description: 'exclude chains from discovery, comma separated.',
    }),
    message: option({
      type: optional(string),
      long: 'message',
      short: 'm',
      description:
        'Message that will be written in the description section of diffHistory.md.',
    }),
    overwriteCache: flag({
      type: boolean,
      long: 'overwrite-cache',
      description: 'overwrite the cache entries.',
    }),
  },
  handler: async (args) => {
    const paths = getDiscoveryPaths()
    const configReader = new ConfigReader(paths.discovery)
    const templateService = new TemplateService(paths.discovery)

    const chainConfigs = configReader
      .readAllDiscoveredProjects()
      .filter((entry) => !args.excludeProjects?.includes(entry.project))
      .flatMap(({ project, chains }) =>
        chains.map((chain) => configReader.readConfig(project, chain)),
      )
      .filter((config) => !args.excludeChains?.includes(config.chain))
      .sort((a, b) => a.chain.localeCompare(b.chain))

    const toRefresh: { config: ConfigRegistry; reason: string }[] = []
    let foundFrom = false

    if (args.excludeChains?.length) {
      console.log('Excluding chains:', args.excludeChains?.join(', '))
    }
    if (args.excludeProjects?.length) {
      console.log('Excluding projects:', args.excludeProjects?.join(', '))
    }

    for (const config of chainConfigs) {
      if (args.from !== undefined) {
        if (!foundFrom && `${config.name}/${config.chain}` === args.from) {
          foundFrom = true
        }
        if (!foundFrom) {
          continue
        }
      }
      const discovery = configReader.readDiscovery(config.name, config.chain)
      const needsRefreshReason = args.all
        ? '--all flag was provided'
        : templateService.discoveryNeedsRefresh(discovery, config)
      if (needsRefreshReason !== undefined) {
        toRefresh.push({
          config,
          reason: needsRefreshReason,
        })
      }
    }

    if (toRefresh.length === 0) {
      console.log(
        'All projects are up to date. Pass --all flag to refresh anyway.',
      )
    } else {
      console.log('Found projects that need discovery refresh:')
      for (const { config, reason } of toRefresh) {
        console.log(`- ${config.chain}/${config.name} (${reason})`)
      }
      console.log(
        `\nOverall ${toRefresh.length} projects need discovery refresh.`,
      )
      if (args.confirmed || keyInYN('Do you want to continue?')) {
        for (const { config } of toRefresh) {
          await discoverAndUpdateDiffHistory(
            {
              project: config.name,
              chain: getChainConfig(config.chain),
              dev: true,
              overwriteCache: args.overwriteCache,
            },
            args.message,
          )
        }
      }
    }
  },
})
