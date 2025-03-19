import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debug

## Logging

The `log!` macro can log messages to the console for debugging purposes.

```rust
// Log a message
log!("DEBUG: {:?}", some_var);
```

## Reset Game State

In development mode, you can reset the state of the game to its initial state anytime by using a simple keyboard shortcut.

<Tabs>
    <TabItem value="macos_linux" label="MacOS / Linux" default>
    `Cmd + R`
    </TabItem>
    <TabItem value="windows" label="Windows" default>
    `Ctrl + R`
    </TabItem>
</Tabs>

## Inspect Your Spritesheet

You can capture your game's internal spritesheet via keyboard shortcut:

<Tabs>
    <TabItem value="macos_linux" label="MacOS / Linux" default>
    `Cmd + 2`
    </TabItem>
    <TabItem value="windows" label="Windows" default>
    `Ctrl + 2`
    </TabItem>
</Tabs>

## Take a Screenshot

On native platforms, you can capture a screenshot from your game via keyboard shortcut:

<Tabs>
    <TabItem value="macos_linux" label="MacOS / Linux" default>
    `Cmd + 1`
    </TabItem>
    <TabItem value="windows" label="Windows" default>
    `Ctrl + 1`
    </TabItem>
</Tabs>