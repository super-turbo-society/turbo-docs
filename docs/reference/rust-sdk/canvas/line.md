# Line

## `path!`

Draws lines.

```rust title="turbo::canvas"
path!(
    start: (i32, i32),
    end: (i32, i32),
    color: u32,
    width: u32,
    border_radius: u32,
)
```

| Param           | Type         | Default      | Description                           |
| :-------------- | :----------- | :----------- | :------------------------------------ |
| `start`         | `(i32, i32)` | `(0, 0)`     | The starting point of the line        |
| `end`           | `(i32, i32)` | `(0, 0)`     | The end point of the line             |
| `color`         | `u32`        | `0xffffffff` | Color that fills the line as RGBA hex |
| `w`             | `u32`        | `1`          | The line width in pixels              |
| `border_radius` | `u32`        | `0`          | Border radius in pixels               |

### Basic Usage

```rust
path!(
    start = (0, 0),
    end = (256, 144),
    width = 4,
    color = 0xff00ffff,
);
```

![Path Screenshot](/path_screenshot.png)
