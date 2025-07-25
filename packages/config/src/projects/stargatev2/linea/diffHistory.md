Generated with discovered.json: 0xc036f398214dbdbceabda8596c81ada3cd1d97de

# Diff at Mon, 09 Jun 2025 10:36:19 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7cc006dadcc55e6cce3be3eb03d491835943fb43 block: 19494867
- current block number: 19822366

## Description

config: add stargate pool shapes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19494867 (main branch discovery), not current.

```diff
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075) {
    +++ description: None
      template:
+        "stargate/StargatePoolNative"
    }
```

Generated with discovered.json: 0x1d9a00b24086cbd2a14b665a17852f013891d8f0

# Diff at Fri, 30 May 2025 06:49:13 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 18731275
- current block number: 19494867

## Description

deficitOffset removed (fee related).

## Watched changes

```diff
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075) {
    +++ description: None
      values.deficitOffset:
-        "320000000000000000000"
+        0
    }
```

Generated with discovered.json: 0x5de69390a9fee29a14e885bab0d5b5c165b8325e

# Diff at Tue, 06 May 2025 15:41:16 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@f365211458ce8b1ced035f6b5e4a56c9f10d2546 block: 15810734
- current block number: 18731275

## Description

Modified liquidity parameter deficitOffset for native and USDC pools.

## Watched changes

```diff
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075) {
    +++ description: None
      values.deficitOffset:
-        "8000000000000000000000"
+        "320000000000000000000"
    }
```

Generated with discovered.json: 0x2137c83e895fbbb0cdcd4b5b55367cbd09bc6ec4

# Diff at Tue, 04 Mar 2025 10:41:19 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 15810734
- current block number: 15810734

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 15810734 (main branch discovery), not current.

```diff
    contract TokenMessaging (0x5f688F563Dc16590e570f97b542FA87931AF2feD) {
    +++ description: None
      sinceBlock:
+        4931061
    }
```

```diff
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075) {
    +++ description: None
      sinceBlock:
+        4931059
    }
```

Generated with discovered.json: 0x718f6bdcc8d35ad33f6b991df5eb04c479fdfde7

# Diff at Fri, 14 Feb 2025 10:23:46 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@166dc249bfa78df836dc8592e4a420bb82432150 block: 5996230
- current block number: 15810734

## Description

Deficit config adjustements affecting fee calculation.

## Watched changes

```diff
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075) {
    +++ description: None
      values.deficitOffset:
-        0
+        "8000000000000000000000"
    }
```

Generated with discovered.json: 0x39bd075a11228decbc46a4eb74f8995fe9867d67

# Diff at Mon, 14 Oct 2024 11:00:22 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 5996230
- current block number: 5996230

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 5996230 (main branch discovery), not current.

```diff
    contract TokenMessaging (0x5f688F563Dc16590e570f97b542FA87931AF2feD) {
    +++ description: None
      sourceHashes:
+        ["0xd0e407d7588e82d593435d256d12b9da5c2c70686a62e24948a96fcbc1a463b4"]
    }
```

```diff
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075) {
    +++ description: None
      sourceHashes:
+        ["0x63ac97930921267a1251904351ae2409e0d62d3d3c3fcb2ed7bc1fc4775321f7"]
    }
```

Generated with discovered.json: 0x6b33ea4c115fa68ba7eda275e12d454e462cb1aa

# Diff at Tue, 30 Jul 2024 11:17:57 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 5996230
- current block number: 5996230

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 5996230 (main branch discovery), not current.

```diff
    contract TokenMessaging (0x5f688F563Dc16590e570f97b542FA87931AF2feD) {
    +++ description: None
      fieldMeta:
+        {"maxAssetId":{"description":"The highest currently registered assetID"}}
    }
```

Generated with discovered.json: 0x46e368545e7982f758599d0a32f0635aaa23594c

# Diff at Mon, 03 Jun 2024 13:44:12 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- current block number: 5124561

## Description

Initial discovery.

## Initial discovery

```diff
+   Status: CREATED
    contract TokenMessaging (0x5f688F563Dc16590e570f97b542FA87931AF2feD)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StargatePoolNative (0x81F6138153d473E8c5EcebD3DC8Cd4903506B075)
    +++ description: None
```
