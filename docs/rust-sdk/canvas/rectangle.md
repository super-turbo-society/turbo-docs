# Rectangles

## `rect!`

Draws rectangles.

```rust title="turbo::canvas"
rect!(
    w: u32,
    h: u32,
    x: i32,
    y: i32,
    color: u32,
    rotate: i32,
    scale_x: f32,
    scale_y: f32,
    border_width: u32,
    border_color: u32,
    border_radius: u32,
)
```

| Param           | Type  | Default      | Description                                                         |
| :-------------- | :---- | :----------- | :------------------------------------------------------------------ |
| `w`             | `u32` | `0`          | Width of the rectangle in pixels                                    |
| `h`             | `u32` | `0`          | Height of the rectangle in pixels                                   |
| `x`             | `i32` | `0`          | X position of the left side of the rectangle in pixels              |
| `y`             | `i32` | `0`          | Y position of the top side of the rectangle in pixels               |
| `color`         | `u32` | `0xffffffff` | Color that fills the rectangle as RGBA hex                          |
| `rotate`        | `i32` | `0`          | Degrees of rotation. Positive clockwise. Negative counter-clockwise |
| `scale_x`       | `f32` | `1.0`        | Horizontal scaling - `1.0` is 100% (aka, no scaling)                |
| `scale_y`       | `f32` | `1.0`        | Vertical scaling - `1.0` is 100% (aka, no scaling)                  |
| `border_width`  | `u32` | `0`          | Border width in pixels                                              |
| `border_color`  | `u32` | `0x000000`   | Border color as RGBA hex                                            |
| `border_radius` | `u32` | `0`          | Border radius in pixels                                             |

### Basic Usage

```rust
rect!(w = 20, h = 40, x = 70, y = 70, color = 0x0000ffff);
```

![Rect Screenshot](/rect_screenshot.png)

### Advanced Usage

```rust
rect!(
    x = 112,
    y = 56,
    w = 32,
    h = 32,
    color = 0x0000ffff,
    rotate = 45,
    border_width = 2,
    border_color = 0xffffffff,
    border_radius = 4,
);
```

![Rectv Screenshot](/rectv_screenshot.png)
