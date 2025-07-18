import { EthereumAddress, UnixTime } from '@l2beat/shared-pure'
import { REASON_FOR_BEING_OTHER } from '../../common'
import { BADGES } from '../../common/badges'
import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import type { ScalingProject } from '../../internalTypes'
import { CELESTIA_DA_PROVIDER, opStackL2 } from '../../templates/opStack'

const discovery = new ProjectDiscovery('pepeunchained')

export const pepeunchained: ScalingProject = opStackL2({
  addedAt: UnixTime(1739541812), // 2025-02-14T14:03:32Z
  daProvider: CELESTIA_DA_PROVIDER,
  celestiaDa: {
    sinceBlock: 21314461,
    namespace: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAADzZzvipmzP4=',
  },
  additionalBadges: [BADGES.RaaS.Conduit],
  discovery,
  reasonsForBeingOther: [
    REASON_FOR_BEING_OTHER.NO_PROOFS,
    REASON_FOR_BEING_OTHER.NO_DA_ORACLE,
  ],
  display: {
    name: 'Pepe Unchained',
    slug: 'pepeunchained',
    description:
      'Pepe Unchained is an Optimium utilizing the OP Stack. It focuses on memes and provides a home for meme creators, traders, and communities to thrive.',
    links: {
      websites: ['https://pepeunchained.com/'],
      bridges: ['https://pepubridge.com/'],
      documentation: ['https://guide.pepeunchained.com/'],
      explorers: ['https://pepuscan.com'],
      socialMedia: ['https://x.com/pepe_unchained'],
    },
  },
  chainConfig: {
    name: 'pepeunchained',
    chainId: 3409,
    apis: [
      {
        type: 'rpc',
        url: 'https://rpc-pepe-unchained-gupg0lo9wf.t.conduit.xyz',
        callsPerMinute: 1500,
      },
    ],
  },
  genesisTimestamp: UnixTime(1733132700),
  isNodeAvailable: true,
  nonTemplateEscrows: [
    {
      address: EthereumAddress('0x384e3ae4d5efc9471201039b555eae496b2a7240'),
      sinceTimestamp: UnixTime(1733132700),
      tokens: ['PEPU'],
      chain: 'ethereum',
    },
  ],
})
