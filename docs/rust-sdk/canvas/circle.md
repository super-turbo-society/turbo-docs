# Circles

## `circ!`

Draws circles.

```rust title="turbo::canvas"
circ!(
    d: u32,
    x: i32,
    y: i32,
    color: u32,
    border_size: u32,
    border_color: u32,
)
```

| Param          | Type  | Default      | Description                       |
| :------------- | :---- | :----------- | :-------------------------------- |
| `d`            | `u32` | `0`          | Diameter of the circle            |
| `x`            | `i32` | `0`          | X position of the circle          |
| `y`            | `i32` | `0`          | Y position of the circle          |
| `color`        | `u32` | `0xffffffff` | Hex color to fill the circle with |
| `border_size`  | `u32` | `0`          | Border width in pixels            |
| `border_color` | `u32` | `0x000000`   | Border color as RGBA hex          |



### Basic Usage

Here's a 16px diameter magenta circle in the center of a 256x144 canvas:

```rust
circ!(d = 16, x = 120, y = 64, color = 0xff00ffff);
```

![Circle Screenshot](/circle_screenshot.png)
