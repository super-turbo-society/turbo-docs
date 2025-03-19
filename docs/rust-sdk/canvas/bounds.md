# Bounds

## `Bounds`

Use `Bounds` to arrange your canvas into rectangular regions. It is a great way to set up your UI and create buttons and menus on your screen.

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

### Create a bounds for the full screen size

```rust
// create a new bounds that fills the full space of your screen
let viewport = viewport();
```

### Create a bounds of a set size and center it

```rust
let viewport = viewport();
// create a new bounds that is 48 px wide and 14 px tall
let bounds = Bounds::with_size(48, 14)
    // center it horizontally and vertically within the whole screen
    .anchor_center(&viewport)
    // move it up 16px
    .translate_y(-16);
```

### Adjusting your bounds

In most cases, you can adjust your bounds with set pixel amounts, or by fractions of another bounds.

```rust
let parent = Bounds::new(200, 100);
// create a new bounds, half as wide as the parent
let child = parent.adjust_width_by_fraction(0.5);
```

### Use your bounds to draw a rectangle

Once you have your bounds in the correct position, you can access its values.

```rust
let viewport = viewport();
// create a new bounds that is 48 px wide and 14 px tall
let bounds = Bounds::with_size(48, 14)
    // centers it horizontally and vertically within the whole screen
    .anchor_center(&viewport)
    // move it up 16px
    .translate_y(-16);
// highlight-start
rect!(
    color = 0xffffffff,
    // Use the bounds position for x and y
    xy = bounds.xy(),
    // Use the bounds size for w and h
    wh = bounds.wh(),
    );
// highlight-end
```

### Detect input on your bounds

You can use `Bounds.hovered()` and `Bounds.just_pressed()` to detect if the mouse is interacting with your bounds.
```rust
let button = Bounds::new(20, 20, 48, 14);
// assign color based on if the button is pressed, hovered or neutral.
let color = 
    if btn.pressed() {
        0x800080FF
    } else if btn.hovered() {
        0xAA55CCff
    } else {
        0x8833AAff
    },
// draw the button
rect!(
    //set color of bounds
    color = color,
    // Use the bounds position for x and y
    xy = bounds.xy(),
    // Use the bounds size for w and h
    wh = bounds.wh(),
    );
```
## Complete Example

Create a row of 3 buttons that use `bounds` to recognize whenever they are hovered or clicked

```rust
turbo::go! {
    let viewport = viewport();
    let buttons = viewport
        .height(32)
        .inset_left(8)
        .inset_right(8)
        .anchor_center(&viewport)
        .inset_bottom(12)
        .columns_with_gap(3, 12); //create a vec of 3 buttons, equally separated, with 12 horizontal pixels between them
    for (i, btn) in buttons.into_iter().enumerate() {
        let label = match i {
            0 => "One",
            1 => "Two",
            2 => "Three",
            _ => "",
        };
        let (regular_color, hover_color, pressed_color) = match i {
            0 => (0x8833AAff, 0xAA55CCff, 0x800080FF),
            1 => (0xCC3333ff, 0xFF5555ff, 0xFF0000FF),
            2 => (0x33CCFFff, 0x66DDFFFF, 0x00FFFFFF),
            _ => (0x3333CCff, 0x5555FFff, 0x000000ff),
        };
        rect!(
            color = if btn.just_pressed() {
                pressed_color
            } else if btn.hovered() {
                hover_color
            } else {
                regular_color
            },
            w = btn.w(),
            h = btn.h(),
            x = btn.x(),
            y = btn.y(),
            border_radius = 2,
        );

        let btn_inner = btn.inset_left(4).inset_top(4);
        text!(label, x = btn_inner.x(), y = btn_inner.y(), font = "medium");    
    }
}
```

![Bounds example showing a simple button row](/bounds_example.gif)




