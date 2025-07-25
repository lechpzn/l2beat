Generated with discovered.json: 0xb981532fae4ac6678980e19d2a5641232d258fb5

# Diff at Wed, 04 Jun 2025 09:30:54 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@2c1561a0dd20d4853f867f43267ae9042bbca2cd block: 22593198
- current block number: 22630381

## Description

chainadmin change.

## Watched changes

```diff
    contract Wonder Multisig (0x4665ad531c35b02dE090E21FC57B69946434bf2b) {
    +++ description: None
      receivedPermissions:
+        [{"permission":"interact","from":"0xC8C4cB5AF7c723c7EfD360898B47920679f92C92","description":"manage fees, apply predefined upgrades, manage censorship through a TransactionFilterer, set DA mode, migrate the chain to whitelisted settlement layers (Chain Admin role).","role":".getAdmin","via":[{"address":"0x9381D943BcC1254723F85E9A85FFcc4Bb3C8deF6"}]}]
      directlyReceivedPermissions:
+        [{"permission":"act","from":"0x9381D943BcC1254723F85E9A85FFcc4Bb3C8deF6","role":".owner"}]
    }
```

```diff
-   Status: DELETED
    contract Safe (0x5e6C5551C1b0626e9061fD4Daca6DA866Fd405aC)
    +++ description: None
```

```diff
    contract ChainAdmin (0x9381D943BcC1254723F85E9A85FFcc4Bb3C8deF6) {
    +++ description: None
      values.owner:
-        "0x5e6C5551C1b0626e9061fD4Daca6DA866Fd405aC"
+        "0x4665ad531c35b02dE090E21FC57B69946434bf2b"
      values.pendingOwner:
-        "0x4665ad531c35b02dE090E21FC57B69946434bf2b"
+        "0x0000000000000000000000000000000000000000"
    }
```

## Source code changes

```diff
.../.flat@22593198/Safe/Safe.sol => /dev/null      | 1088 --------------------
 .../Safe/SafeProxy.p.sol => /dev/null              |   37 -
 2 files changed, 1125 deletions(-)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22593198 (main branch discovery), not current.

```diff
    contract Wonder Multisig (0x4665ad531c35b02dE090E21FC57B69946434bf2b) {
    +++ description: None
      name:
-        "Safe"
+        "Wonder Multisig"
    }
```

Generated with discovered.json: 0x145a85f519f62fd959b4249bad9f85937b126736

# Diff at Tue, 27 May 2025 15:26:26 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- current block number: 22574842

## Description

Initial discovery of a standard zk stack validium.

## Initial discovery

```diff
+   Status: CREATED
    contract DualVerifier (0x079004D9C534Ff1dC3414F5dB31B4a0a1F4fc9d0)
    +++ description: A router contract for verifiers. Routes verification requests to 0x1F517f2bAb178AdD6e282297a4728bcc50E9F6CF or 0xAd36FFc4066855aeF3Bdf6BF03cA427bb084636e depending on the supplied proof type.
```

```diff
+   Status: CREATED
    contract L1VerifierFflonk (0x1F517f2bAb178AdD6e282297a4728bcc50E9F6CF)
    +++ description: Verifies a zk-SNARK proof using an implementation of the fflonk proof system.
```

```diff
+   Status: CREATED
    contract Safe (0x4665ad531c35b02dE090E21FC57B69946434bf2b)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ValidatorTimelock2 (0x5D8ba173Dc6C3c90C8f7C04C9288BeF5FDbAd06E)
    +++ description: Intermediary contract between the *Validators* and the central diamond contract that delays block execution (ie withdrawals and other L2 --> L1 messages) by 3h.
```

```diff
+   Status: CREATED
    contract Safe (0x5e6C5551C1b0626e9061fD4Daca6DA866Fd405aC)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ValidatorTimelock (0x8c0Bfc04AdA21fd496c55B8C50331f904306F564)
    +++ description: Intermediary contract between the *Validators* and the central diamond contract that delays block execution (ie withdrawals and other L2 --> L1 messages) by 3h.
```

```diff
+   Status: CREATED
    contract ValidiumL1DAValidator (0x907b30407249949521Bf0c89A43558dae200146A)
    +++ description: Contract that 'verifies' the data availability for validiums. This implementation only checks the correct formatting and does not serve as a DA oracle. Can be used by ZK stack validiums as the L1 part of a DAValidator pair.
```

```diff
+   Status: CREATED
    contract ChainAdmin (0x9381D943BcC1254723F85E9A85FFcc4Bb3C8deF6)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1VerifierPlonk (0xAd36FFc4066855aeF3Bdf6BF03cA427bb084636e)
    +++ description: Verifies a zk-SNARK proof using an implementation of the PlonK proof system.
```

```diff
+   Status: CREATED
    contract zkVmDiamond (0xC8C4cB5AF7c723c7EfD360898B47920679f92C92)
    +++ description: The main contract defining the Layer 2. Operator actions like commiting blocks, providing ZK proofs and executing batches ultimately target this contract which then processes transactions. During batch execution it processes L1 --> L2 and L2 --> L1 transactions.
```
