# Pointer

## `pointer`

Handles mouse and touch events simultaneously for easy cross-platform functionality.

```rust title="turbo::input"
pub fn pointer() -> Pointer
```

### Using the pointer

```rust
let p = pointer();
// get the current mouse position
let mouse_position_x = p.x;
let mouse_position_y = p.y;

if p.just_pressed(){
    // handle mouse click or touch event
}
```

Mouse clicks are treated identically to taps on mobile.

`p.just_pressed()`, `p.pressed()` and `p.just_released()`.

On mobile, swipes are treated as `gamepad` direction presses. See [`gamepad`](/rust-sdk/input/gamepad) for more details.
