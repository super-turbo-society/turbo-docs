# Resolution

Gets the pixel width and height of the game canvas.

```rust title="turbo::canvas"
resolution() -> (u32, u32)
```

### Get canvas size

```rust
let (canvas_width, canvas_height) = resolution();
```

:::tip

The `resolution` function is for simple use-cases. If you wish to create more robust layouts in Turbo, you may want to get familiar with the [Bounds API](/rust-sdk/bounds).

:::
