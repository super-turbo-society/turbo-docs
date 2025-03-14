# Nine-Slice

Use Nine-Slice sprites to create UI elements, like buttons and text boxes, that can be resized without distorting the borders.

## `nine_slice!`

```rust title="turbo::canvas"
nine_slice!(
    &str,
    margins: (u32, u32, u32, u32)
    x: i32,
    y: i32,
    w: u32,
    h: u32,
)
```

To render a `nine_slice` turbo needs to know the sprite file name and the margins. The margins are the distances in pixels of each edge, starting from the left and moving clockwise.

To draw a `nine_slice`, call the macro like this:

```rust
nine_slice!("nslice", margins = (8,8,8,8), x=28, y=20, w=200, h=50);
```

![Nine_Slice Screenshot](/nine_slice.png)