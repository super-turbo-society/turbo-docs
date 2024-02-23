import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debug

## Logging

The `turbo::println!` macro can log messages to the console for debugging purposes.

```rust
// Log a message
turbo::println!("DEBUG: {:?}", some_var);
```

## Resetting Game State

In development mode, you can reset the state of the game to its initial state anytime by using a simple keyboard shortcut `Cmd+R` on MacOS/Linux and `Ctrl+R` on Windows.

## Inspecting Your Spritesheet

You can capture your game's internal spritesheet via keyboard shortcut:

<Tabs>
    <TabItem value="macos_linux" label="MacOS / Linux" default>
    `Cmd + 2`
    </TabItem>
    <TabItem value="windows" label="Windows" default>
    `Ctrl + 2`
    </TabItem>
</Tabs>
