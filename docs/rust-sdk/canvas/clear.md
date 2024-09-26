# Background Color

## `clear!`

Allows you to set the background color of the canvas. This macro takes a single argument which represents the color to be used as the background color when clearing the canvas.

```rust title="turbo::canvas"
clear!(u32)
```

| Param | Type  | Default      | Description          |
| :---- | :---- | :----------- | :------------------- |
| -     | `u32` | `0x000000ff` | Text to be displayed |

:::note

By default, the screen will clear to black (`0x000000ff`) each frame if `clear` is not called during the game loop.

:::

### Basic Usage

Set the background color to white (`0xffffffff`):

```rust
clear!(0xffffffff);
```

### Default

Omitting the color param will set the background color to default, which is black (`0x000000ff`):

```rust
clear!();
```
