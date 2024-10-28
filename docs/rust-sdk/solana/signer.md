# Signer

## `signer`

Gets the [`Pubkey`](https://docs.rs/solana-sdk/latest/solana_sdk/pubkey/struct.Pubkey.html) of the connected account aka the user's wallet.

```rust title="turbo::solana"
pub fn signer() -> Pubkey
```

### Basic Usage

Import the `solana` module:

```rust
use turbo::solana;
```

You can get a user's public key like so in your game loop:

```rust
let signer_pubkey = solana::signer();
```
