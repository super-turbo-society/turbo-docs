# Transactions

:::warning Pay attention

It is the developer's responsibility to only execute transactions as often as is necessary. Typically, this means after user input such as a click or keypress. DO NOT send transactions every frame of the game loop.

:::

For any Solana [transaction](https://docs.rs/solana-sdk/latest/solana_sdk/transaction/index.html), you will need the following:

1. **[`Pubkey`](https://docs.rs/solana-sdk/latest/solana_sdk/pubkey/struct.Pubkey.html) of the program** you are interacting with
2. **List of [`AccountMeta`](https://docs.rs/solana-sdk/latest/solana_sdk/instruction/struct.AccountMeta.html)** for accounts involved in the transaction
3. **Data for [`Instructions`](https://docs.rs/solana-sdk/latest/solana_sdk/instruction/struct.Instruction.html)** you are including in the transaction

## `sign_and_send_transaction`

Signs a transaction and sends it to the configured RPC endpoint.

```rust title="turbo::solana::rpc"
pub fn sign_and_send_transaction(tx: &Transaction) -> bool
```

### Using Turbo's Anchor Module

This approach is preferred when interacting with an [Anchor](https://www.anchor-lang.com/) program.

First, ensure the required dependencies are in scope:

```rust
use turbo::solana::{
    self,
    anchor::Program,
    solana_sdk::{
        instruction::AccountMeta,
        pubkey::Pubkey
    }
};
```

...then, somewhere in your game loop:

```rust
// highlight-start
// 1. Create the Transaction
// highlight-end
let program_id: Pubkey = ...;
let instruction_name = "name_of_anchor_instruction";
let accounts: Vec<AccountMeta> = vec![...];
let args = my_anchor_program::instructions::DoSomething { ... };
let tx = Program::new(program_id)
    .instruction(instruction_name)
    .accounts(accounts)
    .args(args)
    .transaction();

// highlight-start
// 2. Send the transaction
// highlight-end
let did_send = solana::rpc::sign_and_send_transaction(&tx);
```

:::note

If you are not directly importing an [Anchor](https://www.anchor-lang.com/) program crate, you will have to manually construct instruction args.

:::

### Using Solana SDK

This approach is preferred when interacting with a non-[Anchor](https://www.anchor-lang.com/) program. It relies on the [Solana SDK](https://docs.rs/solana-sdk) which Turbo re-exports.

First, ensure the required dependencies are in scope:

```rust title="Dependencies"
use turbo::solana::{
    self,
    solana_sdk::{
        instruction::{AccountMeta, Instruction},
        pubkey::Pubkey,
        transaction::Transaction
    };
};
```

...then, somewhere in your game loop:

```rust title="Usage"
// highlight-start
// 1. Create the Transaction
// highlight-end
let program_id: Pubkey = ...;
let accounts: Vec<AccountMeta> = vec![...];
let data = vec![...];
let instruction = Instruction {
    program_id,
    accounts,
    data
};
let tx = Transaction::new_with_payer(&[instruction], None);

// highlight-start
// 2. Send the transaction
// highlight-end
let did_send = solana::rpc::sign_and_send_transaction(&tx);
```
