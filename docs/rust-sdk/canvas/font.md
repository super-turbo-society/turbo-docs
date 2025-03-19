# Font

:::info Font Setup

Follow these simple steps to integrate custom fonts into your Turbo game:

1. **Create a `fonts` Folder**

- Inside your project directory, create a folder named `fonts`. This folder will contain all your game fonts.

2. **Put Fonts in the Folder**

- The following file formats are supported: `.bdf`, `.ttf`, and `.otf`.

Now you're ready to use some custom fonts!

:::

Turbo ships with three built-in fonts that support ASCII chars:

```rust title="turbo::canvas"
pub enum Font {
    "small"  // 5x5 chars
    "medium" // 5x8 chars
    "large" // 8x8 chars
}
```

:::tip

Head over to [`Text`](/rust-sdk/canvas/text) to read about printing text in your game!

:::
