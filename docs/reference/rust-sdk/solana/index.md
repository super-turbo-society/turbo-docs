---
sidebar_position: 3
---

import DocCardList from '@theme/DocCardList';

# Solana

When the `solana` feature is enabled, Turbo's `solana` module is made available. This module allows for you to read and write data to/from the Solana blockchain 🚀

> Turbo re-exports `solana_sdk` via `turbo::solana::solana_sdk`, allowing you use existing Solana development techniques you typically use when writing Solana programs (PDA derivation, transaction conconstruction, etc).

:::info

If you pull in an Anchor program as a dependency, there is also a useful `anchor` module in `turbo::solana::anchor` that provides utils for decoding Anchor account data and creating Anchor program transactions.

:::

:::warning

Note that `anchor-client` does not work in Turbo since their networking layers are incompatible. If it's in your game's dependency tree, ngmi.

:::

## Getting Started

The setup requires 3 small steps:

### 1. Enable the SDK's `"solana"` feature

Update your project's `Cargo.toml`:

```toml
# Enable the solana feature
turbo = { version = ">=0.3.8", package = "turbo-genesis-sdk", features = [
"solana",
] }

# If you add an anchor program as a dependency, you'll need this patch
[patch.crates-io]
cc = { git = "https://github.com/jozanza/cc-rs.git", branch = "wasm-patch" }
```

### 2. Configure your RPC URLs

In `src/lib.rs`, add or modify your `turbo::cfg!` with a `[solana]` section that says which Solana RPC urls to use. If you have other settings in the config, you can leave them as-is 👍🏽.

```rust
turbo::cfg!{r#"
    [solana]
    http-rpc-url = "http://localhost:8899"
    ws-rpc-url = "ws://localhost:8900"
"#}
```

### 3. Set the signer

On the web, Turbo games will connect to the user's wallet when the page loads.

When running `turbo` natively, you will need to specify a base58-encoded private key for the user via a `TURBO_SOL_SIGNER` env var:

```bash
TURBO_SOL_SIGNER=<insert base58 private key> turbo run -w path/to/my/project
```

This user will sign all transactions and pay the gas for them.

:::info

You may also set a `TURBO_SOL_PAYER` private key as well if you wish for the payer to be different than the user.

:::

## Learn More

<DocCardList />