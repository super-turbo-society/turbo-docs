# Background Color

Use `clear()` to set the background color of the canvas.

```rust title="turbo::canvas"
clear(u32)
```

| Param | Type  | Default | Description                         |
| :---- | :---- | :------ | :---------------------------------- |
| -     | `u32` | -       | input a hexdecimal code for a color |

:::note

By default, the screen will clear to black (`0x000000ff`) each frame if `clear` is not called during the game loop.

:::

### Basic Usage

Set the background color to white (`0xffffffff`):

```rust
clear(0xffffffff);
```

