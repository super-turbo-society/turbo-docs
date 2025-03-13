# Canvas Size

Gets the unscaled canvas size in pixels.

```rust title="turbo::canvas"
canvas::resolution() -> (u32, u32)
```

### Get canvas size

```rust
let (canvas_width, canvas_height) = canvas::size();
```