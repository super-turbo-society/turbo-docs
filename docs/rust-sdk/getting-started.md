---
sidebar_position: 0
---

# Getting Started

## Overview

A Turbo game typically has 2 main parts, each controlled by a macro:

1. **Initialization** - `turbo::init!`
2. **Execution** - `turbo::go!`

:::tip

`turbo::init!` is where you define the starting values for your game. 

`turbo::go!` is where you put your game code. The code you put in `go!` will run 60 times per second.

:::

## Configuration

Your project will initialize with a file called turbo.toml. If you open it, you can see the default settings look like this:

```
name = "hello-world"
version = "0.1.0"
author = "Anonymous"
description = "An awesome game made in Turbo!"

[canvas]
width = 256
height = 144
```

You can change your resolution and game name here.

## Initialization

Turbo provides a straightforward way to initialize the standard game state using the `turbo::init!` macro. This macro is essential for defining and setting up the game state before entering the main game loop:

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

- For convenience, `turbo::init!` allows nested struct and enum definitions via the [structstruck](https://docs.rs/structstruck/latest/structstruck/) crate.

- `turbo::init` will derive the following traits for type each defined in the macro: `BorshSerialize`, `BorshDeserialize`, `PartialEq`, `Debug`, and `Clone`.
  
- In development, you can reset the state of the game to its initial state anytime by using a simple keyboard shortcut `Cmd+R` on MacOS/Linux and `Ctrl+R` on Windows.

:::

## Execution

Turbo games run at 60 fps and the typical game loop should follow this pattern:

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

If you're building something more along the lines of a visualizer, your game may not have its own state to manage. In this case, all you need is the game logic. You can skip `turbo::init!` (and loading/saving game state).

:::
