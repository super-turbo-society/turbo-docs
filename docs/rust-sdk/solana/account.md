# Accounts

## `get_account`

Queries an account via the Solana HTTP RPC API + subscribes to account data updates via Solana's WebSocket RPC API.

```rust title="turbo::solana::rpc"
pub fn get_account<T: ToString>(pubkey: T) -> QueryResult<AccountInfo, String>
```

| Param    | Type                        | Default | Description                                                                                                                                                                                                             |
| :------- | :-------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pubkey` | `Pubkey \| String  \| &str` |         | A [`Pubkey`](https://docs.rs/solana-sdk/latest/solana_sdk/pubkey/struct.Pubkey.html) or string-like value that can be converted to a [`Pubkey`](https://docs.rs/solana-sdk/latest/solana_sdk/pubkey/struct.Pubkey.html) |

<details>
<summary>**`QueryResult`**</summary>

```rust title="turbo::solana::rpc"
// Structure representing the result of a query to the Solana network
#[derive(Debug, Clone, BorshSerialize, BorshDeserialize)]
pub struct QueryResult<T, E> {
    pub context: QueryResultContext,
    pub status: RequestStatus,
    pub error: Option<E>,
    pub value: Option<T>,
}
```

</details>

<details>
<summary>**`QueryResultContext`**</summary>

```rust title="turbo::solana::rpc"
// Context for a query result, including the slot number
#[derive(Debug, Copy, Clone, BorshSerialize, BorshDeserialize)]
pub struct QueryResultContext {
    pub slot: Option<u64>,
}
```

</details>

<details>
<summary>**`RequestStatus`**</summary>

```rust title="turbo::solana::rpc"
// Enum to represent the status of a request
#[derive(Debug, Copy, Clone, PartialEq, BorshSerialize, BorshDeserialize)]
pub enum RequestStatus {
    Idle,
    Pending,
    Done,
}
```

</details>

<details>
<summary>**`AccountInfo`**</summary>

```rust title="turbo::solana::rpc"
// Account information structure for Solana accounts
#[derive(Debug, Clone, BorshSerialize, BorshDeserialize)]
pub struct AccountInfo {
    pub data: Vec<u8>,
    pub executable: bool,
    pub lamports: u64,
    pub owner: String,
    pub rent_epoch: u64,
    pub space: u32,
}

```

</details>

### Fetch an Account

```rust title="Dependencies"
use turbo::solana;
use solana::{anchor, rpc, solana_sdk};
use solana_sdk::pubkey::Pubkey;
```

```rust title="Usage"
let pubkey = Pubkey::new(...);
let res = rpc::get_account(pubkey);
if !res.is_fetched() {
    // The account isn't fetched yet.
    // Here's where you can handle the loading state.
} else if let Some(ref account) = res.value {
    // The account is loaded.
    // Here is where you would deserialize its data.
} else {
    // The account loaded, but it has no data.
    // This typically means the account has been deleted.
}
```

### Deserialize Account Data

#### Anchor

```rust title="Dependencies"
use turbo::solana;
use solana::{anchor, rpc::AccountInfo};
use my_anchor_program::MyAnchorAccount;
```

```rust title="Usage"
let account: AccountInfo = ...;
match anchor::try_from_slice::<MyAnchorAccount>(&account.data) {
    Ok(data) => {
        // Do stuff with deserialized data.
    }
    Err(err) => {
        // Uh oh deserialization error.
    }
}
```

:::info

If the Anchor account has extra space allocated, follow the instructions in the next section.

:::

#### Borsh

Use this approach if one of the following is true:

- You are interacting with a non-Anchor program that borsh-encodes account data
- You are deserializing an account that has extra space allocated

```rust title="Dependencies"
use turbo::solana;
use solana::rpc::AccountInfo;
use my_anchor_program::MyAnchorAccount;
```

```rust title="Usage"
let account: AccountInfo = ...;
// You will need to skip the first 8 bytes when decoding an Anchor struct.
// Those bytes are reserved for a "discriminator" – basically, the struct's IDL schema identifier.
match MyAnchorAccount::deserialize(&account.data[8..]) {
    Ok(data) => {
        // Do stuff with deserialized data.
    }
    Err(err) => {
        // Uh oh deserialization error.
    }
}
```

:::info

When slicing off the discriminator, it's a good idea to check that the account data is >= 8. Slicing a smaller Vec will panic. If you are interacting with a non-Anchor program that borsh-encodes account data, don't skip the first 8 bytes.

:::
