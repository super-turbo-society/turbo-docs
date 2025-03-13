# Ellipses

## `ellipse!`

Draws ellipses.

```rust title="turbo::canvas"
ellipse!(
    x: i32,
    y: i32,
    w = i32,
    h = i32,
    color = u32,
    rotation = u32,
    border_size: i32,
    border_color: u32,
)
```

| Param           | Type  | Default      | Description                                                         |
| :-------------- | :---- | :----------- | :------------------------------------------------------------------ |
| `x`             | `i32` | `0`          | X position of the ellipse                                           |
| `y`             | `i32` | `0`          | Y position of the ellipse                                           |
| `w`             | `u32` | `0`          | Width of the ellipse in pixels                                      |
| `h`             | `u32` | `0`          | Height of the ellipse in pixels                                     |
| `color`         | `u32` | `0xffffffff` | Hex color to fill ellipse with                                      |
| `rotation`      | `u32` | `0`          | Degrees of rotation. Positive clockwise. Negative counter-clockwise |
| `border_size`   | `i32` | `0`          | Border width in pixels                                              |
| `border_color`  | `u32` | `0x000000`   | Border color as RGBA hex                                            |


### Basic Usage

```rust
ellipse!( x = 50, y = 50, w = 30, h = 20, color = 0xffff00ff);
```

![Ellipse Screenshot](/ellipse_screenshot.png)

### Advanced Usage

```rust
ellipse!(
    x = 100,
    y = 56,
    w = 64,
    h = 48,
    rotation = 45,
    color = 0xffff00ff,
    border_size = 2,
    border_color = 0x00ffffff,
);
```

![Ellipsev Screenshot](/ellipsev_screenshot.png)
