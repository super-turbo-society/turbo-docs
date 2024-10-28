# Font

Turbo ships with three built-in fonts that support ASCII chars:

```rust title="turbo::canvas"
pub enum Font {
    S = 0, // 5x5 chars
    M = 1, // 5x8 chars
    L = 2, // 8x8 chars
}
```