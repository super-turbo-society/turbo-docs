# Bounds

## `Bounds<T>`

`Bounds` represents a rectangular region in 2D space. This provides essential methods for positioning, sizing, and geometric operations.

```rust title="turbo::bounds"
pub struct Bounds {
    // Top-left corner coordinates.
    x = i32,
    y = i32,
    // Width and height of the rectangle.
    w = u32,
    h = u32,
}
```

### Using bound to get canvas size

```rust
// Create a new bound with the values of your canvas
let viewport = bounds();
```

### Create a bounds with size and center it

```rust
//A bound now exists that is 48 by 14
let bound = Bounds::with_size(48, 14)
    // centers it horizontally and vertically
    .anchor_center(&viewport)
    // moves it up 16px
    .translate_y(-16);
```

### Making it visible

```rust
rect!(
    //set color of bounds
    color = 0xffffffff,
    // Use the bounds position for x and y
    xy = bound.xy(),
    // Use the bounds size for w and h
    wh = bound.wh(),
    );
```

## Complete Example

Create 3 rows and columns of buttons that use `bounds` to recognize whenever they are hovered or clicked

```rust
turbo::go! {
    let viewport = bounds();

    let cols = viewport.columns_with_gap(3, 10);
    let rows = viewport.rows_with_gap(3, 10);
    // Divides the viewport into 3 columns and rows with 10 px gaps
    for row in 0..3 {
        for col in 0..3 {
            let btn = Bounds::with_size(48, 14)
                .anchor_center(&cols[col])
                .anchor_top(&rows[row])
                .translate_y(16);
            rect!(

                color = if btn.pressed() {
                    0x8800ffff
                } else if btn.hovered() {
                    0xaa00ffff
                } else {
                    0xff00ffff
                },
                xy = btn.xy(),
                wh = btn.wh(),
            );

            let btn_inner = btn.inset(2);
            text!("Click me!", xy = btn_inner.xy());
            // Draw the text inside the button

        }
    }
}
```

![Bounds example showing 3 by 3 button grid](/bound-example.gif)
