---
sidebar_position: 0
---

# Getting Started

## Overview

A Turbo game typically has 3 main parts, each controlled by a macro:

1. **Configuration** - `turbo::cfg`
2. **Initialization** - `turbo::init`
3. **Execution** - `turbo::go`

:::tip

All are optional except for `turbo::go`, but most games will at least want to include game state initialization via `turbo::init` as well.

:::

## Configuration

 Use the `turbo::cfg!` macro to define your game's metadata and configure settings in TOML format:

```rust
turbo::cfg! {r#"
    name = "Game name"
    version = "1.0.0"
    author = "game author"
    description = "Game description"
    [settings]
    resolution = [256, 144]
    [solana]
    http-rpc-url = "http://127.0.0.1:8899"
    ws-rpc-url = "ws://127.0.0.1:8900"
"#}
```

:::info

The Solana configuration is required for those who want to interact with Solana in their games. Otherwise, the remaining config fields are optional.

:::

## Initialization

Turbo provides a straightforward way to initialize the standard game state using the `turbo::init` macro. This macro is essential for defining and setting up the game state before entering the main game loop:

```rust
turbo::init! {
    // highlight-start
    // Define the GameState struct.
    // highlight-end
    struct GameState {
        screen: enum Screen {
            Title,
            Level,
        },
        x_position: i32,
        y_position: i32,
    } = {
        // highlight-start
        // Set the struct's initial value.
        // highlight-end
        Self {
            screen: Screen::Title,
            x_position: 30,
            y_position: 40,
        }
    }
}
```

:::info

- For convenience, `turbo::init` allows nested struct and enum definitions via the [structstruck](https://docs.rs/structstruck/latest/structstruck/) crate.
- `turbo::init` will derive the following traits for type each defined in the macro: `BorshSerialize`, `BorshDeserialize`, `PartialEq`, `Debug`, and `Clone`.
- In development, you can reset the state of the game to its initial state anytime by using a simple keyboard shortcut `Cmd+R` on MacOS/Linux and `Ctrl+R` on Windows.

:::

## Execution

Turbo games run at 60 fps and the typical game loop should typically follow this pattern:

```rust
turbo::go! {
    // highlight-start
    // 1. Load State
    // highlight-end
    // This hydrates state from the previous loop.
    // The initial state's initial value will load on the first loop.
    let mut state = GameState::load();

    // highlight-start
    // 2. Update State
    // highlight-end
    // Your game's logic goes here. Mutate state as-needed.

    // highlight-start
    // 3. Save State
    // highlight-end
    // The final thing you should do in your game loop is save your game state.
    // This serializes state and persists it in memory so it doesn't get lost while hot-reloading
    state.save();
}
```

:::note

If you're building something more along the lines of a visualizer, your game may not have its own state to manage. In this case, all you need is the game logic. You can skip `turbo::init` (and loading/saving game state).

:::
