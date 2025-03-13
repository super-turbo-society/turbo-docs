# Line

## `path!`

Draws lines.

```rust title="turbo::canvas"
path!(
    start = (i32, i32),
    end = (i32, i32),
    size = u32,
    color = u32,
    rounded = bool,
)
```

| Param           | Type         | Default      | Description                           |
| :-------------- | :----------- | :----------- | :------------------------------------ |
| `start`         | `(i32, i32)` | `(0, 0)`     | The starting point of the line        |
| `end`           | `(i32, i32)` | `(0, 0)`     | The end point of the line             |
| `size`          | `u32`        | `1`          | The line width in pixels              |
| `color`         | `u32`        | `0xffffffff` | Color that fills the line as RGBA hex |
| `rounded`       | `bool`       | `false`      | Stylize the line to be square or round|


### Basic Usage

```rust
path!(
    start = (0, 0),
    end = (256, 144),
    size = 4,
    color = 0xff00ffff,
);
```

![Path Screenshot](/path_screenshot.png)
