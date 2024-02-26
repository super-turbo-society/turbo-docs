# Canvas Size

## `canvas_size!`

Gets the unscaled canvas size in pixels.

```rust title="turbo::canvas"
canvas_size!() -> [u32; 2]
```

### Get canvas size

```rust
let [canvas_width, canvas_height] = canvas_size!();
```
