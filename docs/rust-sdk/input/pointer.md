# Pointer

Handles mouse and touch events simultaneously for easy cross-platform functionality.

```rust title="turbo::input"
pub fn pointer() -> Pointer
```

### Using the pointer

```rust 
let p = pointer();

// get the current mouse/touch position
let position_x = p.x;
let position_y = p.y;

if p.just_pressed() {
    // handle mouse click or touch event
}
```

Mouse clicks are treated identically to taps on mobile. Use `p.just_pressed()`, `p.pressed()` and `p.just_released()` to check for interaction.

On mobile, swipes are treated as `gamepad` direction presses. See [`gamepad`](/rust-sdk/input/gamepad) for more details.
