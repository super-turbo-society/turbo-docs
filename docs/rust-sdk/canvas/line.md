# Line

## `canvas::line!`

Draws lines.

```rust title="turbo::canvas"
canvas::line!(
    start = (i32, i32),
    end = (i32, i32),
    size = u32,
    color = u32,
)
```

| Param           | Type         | Default      | Description                           |
| :-------------- | :----------- | :----------- | :------------------------------------ |
| `start`         | `(i32, i32)` | `(0, 0)`     | The starting point of the line        |
| `end`           | `(i32, i32)` | `(0, 0)`     | The end point of the line             |
| `color`         | `u32`        | `0xffffffff` | Color that fills the line as RGBA hex |
| `size`          | `u32`        | `1`          | The line width in pixels              |

### Basic Usage

```rust
canvas::line!(
    start = (0, 0),
    end = (256, 144),
    size = 4,
    color = 0xff00ffff,
);
```

![Path Screenshot](/path_screenshot.png)
