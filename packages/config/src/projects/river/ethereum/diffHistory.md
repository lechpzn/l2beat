Generated with discovered.json: 0x3bdbd7b3c412dc87b3eb93d35c441485d046b684

# Diff at Fri, 30 May 2025 07:14:18 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 21872580
- current block number: 21872580

## Description

config: change comment about eip1559 fee val

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.eip1559Denominator:
+        {"description":"volatility param: lower denominator -> quicker fee changes on L2"}
    }
```

Generated with discovered.json: 0xcf165594d0ba7d11b7d5300929fd0317539f0c24

# Diff at Fri, 23 May 2025 09:41:03 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 21872580
- current block number: 21872580

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    EOA  (0x1F7D2BCe97a04D2f935C62b53fE04fed373d2d17) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"propose","from":"0x29E7177837652ca00f05fbD2e8aA867d207B2EF8","role":".proposer"}
      receivedPermissions.0.role:
+        ".PROPOSER"
    }
```

```diff
    contract RiverMultisig (0x2876c43B17A5750CBea5E2A3C42718374E21D5a2) {
    +++ description: None
      receivedPermissions.10.role:
+        "admin"
      receivedPermissions.9.role:
+        "admin"
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.permission:
-        "guard"
+        "upgrade"
      receivedPermissions.6.from:
-        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
+        "0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.6.via:
+        [{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]
      receivedPermissions.5.permission:
-        "guard"
+        "upgrade"
      receivedPermissions.5.from:
-        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
+        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.5.via:
+        [{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]
      receivedPermissions.4.permission:
-        "upgrade"
+        "guard"
      receivedPermissions.4.from:
-        "0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96"
+        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      receivedPermissions.4.via:
-        [{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]
      receivedPermissions.4.role:
+        ".guardian"
      receivedPermissions.3.permission:
-        "interact"
+        "guard"
      receivedPermissions.3.from:
-        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
+        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      receivedPermissions.3.description:
-        "set and change address mappings."
      receivedPermissions.3.via:
-        [{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]
      receivedPermissions.3.role:
+        ".guardian"
      receivedPermissions.2.permission:
-        "upgrade"
+        "interact"
      receivedPermissions.2.from:
-        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
+        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
      receivedPermissions.2.description:
+        "set and change address mappings."
      receivedPermissions.2.role:
+        ".owner"
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".$admin"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0x318Cf0B120595B1bE66a823a83362dbae7434D3d) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"challenge","from":"0x29E7177837652ca00f05fbD2e8aA867d207B2EF8","role":".CHALLENGER"}
      receivedPermissions.0.role:
+        ".challenger"
    }
```

```diff
    EOA  (0x52ee324F2bCD0c5363d713eb9f62D1eE47266ac1) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batcherHash"
    }
```

```diff
    contract ProxyAdmin (0x566c7DB023111D897F16b602B2B57f0F12f7bF44) {
    +++ description: None
      directlyReceivedPermissions.7.role:
+        "admin"
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.permission:
-        "interact"
+        "upgrade"
      directlyReceivedPermissions.2.from:
-        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
+        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
      directlyReceivedPermissions.2.description:
-        "set and change address mappings."
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.permission:
-        "upgrade"
+        "interact"
      directlyReceivedPermissions.1.from:
-        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
+        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
      directlyReceivedPermissions.1.description:
+        "set and change address mappings."
      directlyReceivedPermissions.1.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".$admin"
    }
```

Generated with discovered.json: 0x5f6551d081e48bd9383a4386437f1d75c741267b

# Diff at Tue, 29 Apr 2025 08:19:10 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 21872580
- current block number: 21872580

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions:
-        [{"permission":"challenge","to":"0x318Cf0B120595B1bE66a823a83362dbae7434D3d","via":[]},{"permission":"propose","to":"0x1F7D2BCe97a04D2f935C62b53fE04fed373d2d17","via":[]},{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract L1ERC721Bridge (0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract OptimismPortal (0x9fDEEa19836A413C04e9672d3d09f482278e863c) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions:
-        [{"permission":"guard","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[]},{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract AddressManager (0xA80349b0D79bf3154ae54066410d20eb7B8697Ac) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","description":"set and change address mappings.","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions:
-        [{"permission":"guard","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[]},{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
-        [{"permission":"interact","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","description":"it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.","via":[]},{"permission":"sequence","to":"0x52ee324F2bCD0c5363d713eb9f62D1eE47266ac1","via":[]},{"permission":"upgrade","to":"0x2876c43B17A5750CBea5E2A3C42718374E21D5a2","via":[{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]}]
    }
```

Generated with discovered.json: 0x89b6782c5e204fa86e94d92325a1cf11cfd0b270

# Diff at Thu, 27 Mar 2025 11:14:59 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8cc2e36080df3a74dfd8475d41c64f46203f5218 block: 21872580
- current block number: 21872580

## Description

Config related: add guardian description details, hide some noisy values, hide AddressManager as spam cat, add proposer / challenger to permissioned opfp chains.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract AddressManager (0xA80349b0D79bf3154ae54066410d20eb7B8697Ac) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

Generated with discovered.json: 0x7c1783c2bd6415d99cba5629bc4efc96548f7465

# Diff at Wed, 19 Mar 2025 13:05:20 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e950b6e93c84855ee2ec1740913b7b4c994b9ae2 block: 21872580
- current block number: 21872580

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract undefined (0x1F7D2BCe97a04D2f935C62b53fE04fed373d2d17) {
    +++ description: None
      severity:
-        "HIGH"
    }
```

```diff
    contract undefined (0x318Cf0B120595B1bE66a823a83362dbae7434D3d) {
    +++ description: None
      severity:
-        "HIGH"
    }
```

Generated with discovered.json: 0xac3f01099e7d3873dff12940a41a441d8cd65809

# Diff at Tue, 04 Mar 2025 11:26:14 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@be38e12d3ff947ca8de40f3a23a9ba1875a54f5a block: 21872580
- current block number: 21872580

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        true
      values.opStackDA.isUsingCelestia:
+        true
    }
```

Generated with discovered.json: 0x64941c81a2c712f51405f4a42817052383caf693

# Diff at Tue, 04 Mar 2025 10:39:42 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21872580
- current block number: 21872580

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x22B0cd077c937b9912772B38519b6d2d91541c1A) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sinceBlock:
+        19905422
    }
```

```diff
    contract RiverMultisig (0x2876c43B17A5750CBea5E2A3C42718374E21D5a2) {
    +++ description: None
      sinceBlock:
+        19885979
    }
```

```diff
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sinceBlock:
+        19905422
    }
```

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      sinceBlock:
+        19905422
    }
```

```diff
    contract L1ERC721Bridge (0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sinceBlock:
+        19905422
    }
```

```diff
    contract ProxyAdmin (0x566c7DB023111D897F16b602B2B57f0F12f7bF44) {
    +++ description: None
      sinceBlock:
+        19905422
    }
```

```diff
    contract OptimismPortal (0x9fDEEa19836A413C04e9672d3d09f482278e863c) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sinceBlock:
+        19905422
    }
```

```diff
    contract AddressManager (0xA80349b0D79bf3154ae54066410d20eb7B8697Ac) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        19905422
    }
```

```diff
    contract OptimismMintableERC20Factory (0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sinceBlock:
+        19905422
    }
```

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sinceBlock:
+        19905422
    }
```

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sinceBlock:
+        19905422
    }
```

Generated with discovered.json: 0xbb60a4e2518e26ffd4d900fa314a404c59678762

# Diff at Wed, 26 Feb 2025 10:33:00 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18513668f913fbe57a197f43655b19111df0e627 block: 21872580
- current block number: 21872580

## Description

config related: added categories for all opstack, op stack and polygoncdk stack templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x22B0cd077c937b9912772B38519b6d2d91541c1A) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L1ERC721Bridge (0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract OptimismPortal (0x9fDEEa19836A413C04e9672d3d09f482278e863c) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      category:
+        {"name":"Governance","priority":3}
    }
```

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

Generated with discovered.json: 0xe82236554915662e3c571846cf27648571f826da

# Diff at Fri, 21 Feb 2025 14:10:45 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 21872580
- current block number: 21872580

## Description

Config related: Change some severities and add templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta.proposer:
+        {"severity":"HIGH"}
      fieldMeta.challenger:
+        {"severity":"HIGH"}
      fieldMeta.deletedOutputs:
+        {"severity":"HIGH"}
    }
```

Generated with discovered.json: 0x2d3e749b52375eb789551b6845c77a433a1affb9

# Diff at Fri, 21 Feb 2025 08:59:59 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1cf9ec35847912163c4b663a633e258a434c0bca block: 21872580
- current block number: 21872580

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21872580 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x22B0cd077c937b9912772B38519b6d2d91541c1A) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      categories:
-        ["Core"]
    }
```

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      categories:
-        ["Gateways&Escrows"]
    }
```

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      categories:
-        ["Upgrades&Governance"]
    }
```

Generated with discovered.json: 0x3b7fb3649627e96691898dbde222c9681e20f7ac

# Diff at Tue, 18 Feb 2025 10:12:24 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@aff7e43e1c06f559de916763e04088cc23b3e08e block: 21065199
- current block number: 21872580

## Description

DA switched from Ethereum blobs to Celestia without any L1 config changes.

## Watched changes

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        false
+        true
      values.opStackDA.isSequencerSendingBlobTx:
-        true
+        false
    }
```

Generated with discovered.json: 0xa76d39631544f0a506652c3bee93d041bce61481

# Diff at Mon, 10 Feb 2025 19:04:31 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3756adff7c1ac86d8af3374a90a75c1999aae2b3 block: 21065199
- current block number: 21065199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065199 (main branch discovery), not current.

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isUsingEigenDA:
+        false
    }
```

Generated with discovered.json: 0xe943f8dd3583502722cc4f719e19ec8c441cc2a3

# Diff at Tue, 04 Feb 2025 12:31:56 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21065199
- current block number: 21065199

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065199 (main branch discovery), not current.

```diff
    contract RiverMultisig (0x2876c43B17A5750CBea5E2A3C42718374E21D5a2) {
    +++ description: None
      receivedPermissions.3.permission:
-        "guard"
+        "interact"
      receivedPermissions.3.from:
-        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
+        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      receivedPermissions.3.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.2.permission:
-        "guard"
+        "interact"
      receivedPermissions.2.from:
-        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
+        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
      receivedPermissions.2.description:
+        "set and change address mappings."
      receivedPermissions.2.via:
+        [{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]
      receivedPermissions.1.permission:
-        "configure"
+        "guard"
      receivedPermissions.1.from:
-        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
+        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      receivedPermissions.1.description:
-        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.0.permission:
-        "configure"
+        "guard"
      receivedPermissions.0.from:
-        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
+        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      receivedPermissions.0.description:
-        "set and change address mappings."
      receivedPermissions.0.via:
-        [{"address":"0x566c7DB023111D897F16b602B2B57f0F12f7bF44"}]
    }
```

```diff
    contract ProxyAdmin (0x566c7DB023111D897F16b602B2B57f0F12f7bF44) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract AddressManager (0xA80349b0D79bf3154ae54066410d20eb7B8697Ac) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0x93eaf9d738aeacdd3bfc58e0481bd3163c34253b

# Diff at Mon, 20 Jan 2025 11:09:59 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21065199
- current block number: 21065199

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065199 (main branch discovery), not current.

```diff
    contract RiverMultisig (0x2876c43B17A5750CBea5E2A3C42718374E21D5a2) {
    +++ description: None
      receivedPermissions.10.target:
-        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      receivedPermissions.10.from:
+        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      receivedPermissions.9.target:
-        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      receivedPermissions.9.from:
+        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      receivedPermissions.8.target:
-        "0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C"
      receivedPermissions.8.from:
+        "0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C"
      receivedPermissions.7.target:
-        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      receivedPermissions.7.from:
+        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      receivedPermissions.6.target:
-        "0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96"
      receivedPermissions.6.from:
+        "0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96"
      receivedPermissions.5.target:
-        "0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03"
      receivedPermissions.5.from:
+        "0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03"
      receivedPermissions.4.target:
-        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
      receivedPermissions.4.from:
+        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
      receivedPermissions.3.target:
-        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      receivedPermissions.3.from:
+        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      receivedPermissions.2.target:
-        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      receivedPermissions.2.from:
+        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      receivedPermissions.1.target:
-        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      receivedPermissions.1.from:
+        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      receivedPermissions.0.target:
-        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
      receivedPermissions.0.from:
+        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
      directlyReceivedPermissions.0.target:
-        "0x566c7DB023111D897F16b602B2B57f0F12f7bF44"
      directlyReceivedPermissions.0.from:
+        "0x566c7DB023111D897F16b602B2B57f0F12f7bF44"
    }
```

```diff
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.1.target:
-        "0x1F7D2BCe97a04D2f935C62b53fE04fed373d2d17"
      issuedPermissions.1.to:
+        "0x1F7D2BCe97a04D2f935C62b53fE04fed373d2d17"
      issuedPermissions.0.target:
-        "0x318Cf0B120595B1bE66a823a83362dbae7434D3d"
      issuedPermissions.0.to:
+        "0x318Cf0B120595B1bE66a823a83362dbae7434D3d"
    }
```

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract L1ERC721Bridge (0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
    }
```

```diff
    contract ProxyAdmin (0x566c7DB023111D897F16b602B2B57f0F12f7bF44) {
    +++ description: None
      directlyReceivedPermissions.7.target:
-        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      directlyReceivedPermissions.7.from:
+        "0xf565303B5326C8653E78e5f73a2984f6F778C9E8"
      directlyReceivedPermissions.6.target:
-        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      directlyReceivedPermissions.6.from:
+        "0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A"
      directlyReceivedPermissions.5.target:
-        "0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C"
      directlyReceivedPermissions.5.from:
+        "0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C"
      directlyReceivedPermissions.4.target:
-        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      directlyReceivedPermissions.4.from:
+        "0x9fDEEa19836A413C04e9672d3d09f482278e863c"
      directlyReceivedPermissions.3.target:
-        "0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96"
      directlyReceivedPermissions.3.from:
+        "0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96"
      directlyReceivedPermissions.2.target:
-        "0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03"
      directlyReceivedPermissions.2.from:
+        "0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03"
      directlyReceivedPermissions.1.target:
-        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
      directlyReceivedPermissions.1.from:
+        "0x29E7177837652ca00f05fbD2e8aA867d207B2EF8"
      directlyReceivedPermissions.0.target:
-        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
      directlyReceivedPermissions.0.from:
+        "0xA80349b0D79bf3154ae54066410d20eb7B8697Ac"
    }
```

```diff
    contract OptimismPortal (0x9fDEEa19836A413C04e9672d3d09f482278e863c) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
    }
```

```diff
    contract AddressManager (0xA80349b0D79bf3154ae54066410d20eb7B8697Ac) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "set and change address mappings."
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract OptimismMintableERC20Factory (0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
    }
```

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.1.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
    }
```

```diff
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.1.target:
-        "0x52ee324F2bCD0c5363d713eb9f62D1eE47266ac1"
      issuedPermissions.1.to:
+        "0x52ee324F2bCD0c5363d713eb9f62D1eE47266ac1"
      issuedPermissions.0.target:
-        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.to:
+        "0x2876c43B17A5750CBea5E2A3C42718374E21D5a2"
      issuedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
    }
```

Generated with discovered.json: 0xded3e9d919f2a510130d674ab3c36c26dfb54526

# Diff at Wed, 08 Jan 2025 09:06:05 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@deefa974378c2cd6b74f061e1f5a494bbbe1d63a block: 21065199
- current block number: 21065199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065199 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      description:
-        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain."
    }
```

Generated with discovered.json: 0xd3f5101021fa1005c519200785335101fd2eebd6

# Diff at Fri, 01 Nov 2024 12:23:56 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cd1f0e71bb08ce16b2084a11b768538e8aa6ba8c block: 21065199
- current block number: 21065199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065199 (main branch discovery), not current.

```diff
    contract RiverMultisig (0x2876c43B17A5750CBea5E2A3C42718374E21D5a2) {
    +++ description: None
      receivedPermissions.5.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ProxyAdmin (0x566c7DB023111D897F16b602B2B57f0F12f7bF44) {
    +++ description: None
      directlyReceivedPermissions.2.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      description:
-        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

Generated with discovered.json: 0xd2f7b93ed8fd9d4dbbc53e8f9f7aa2147a03e54b

# Diff at Tue, 29 Oct 2024 13:17:14 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 21065199
- current block number: 21065199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065199 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta:
+        {"FINALIZATION_PERIOD_SECONDS":{"description":"Challenge period (Number of seconds until a state root is finalized)."}}
    }
```

Generated with discovered.json: 0x5789122cc0991021cb1662e4b442d7f565cacc87

# Diff at Mon, 28 Oct 2024 16:03:44 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@9545db26ac342c1f6a432443f18ae63a0ab49007 block: 21065033
- current block number: 21065199

## Description

River superchainconf is fake.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21065033 (main branch discovery), not current.

```diff
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A) {
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      template:
-        "opstack/SuperchainConfig"
+        "opstack/SuperchainConfigFake"
      description:
-        "Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

Generated with discovered.json: 0x615f65ab4c1ad5ea94c1073a72ef795e4569689b

# Diff at Mon, 28 Oct 2024 15:30:37 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- current block number: 21065033

## Description

Initial discovery: Standard OP stack rollup.

## Initial discovery

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x22B0cd077c937b9912772B38519b6d2d91541c1A)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract RiverMultisig (0x2876c43B17A5750CBea5E2A3C42718374E21D5a2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x29E7177837652ca00f05fbD2e8aA867d207B2EF8)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x2d51D580Cae0a644a5328E665c768C2A4c0E4a03)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x42AABA8A896ca6C987068Ac9a9112c2e4dcA4c96)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x566c7DB023111D897F16b602B2B57f0F12f7bF44)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x9fDEEa19836A413C04e9672d3d09f482278e863c)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract AddressManager (0xA80349b0D79bf3154ae54066410d20eb7B8697Ac)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0xB5984cCf496a8FC2d921A5a425Bd5F7a740BE89C)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0xb6aFBB2A7299e968c9f98f8b518bD89e670a420A)
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract SystemConfig (0xf565303B5326C8653E78e5f73a2984f6F778C9E8)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```
