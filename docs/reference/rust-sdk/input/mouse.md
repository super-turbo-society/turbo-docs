# Mouse

## `mouse`

Tracks the mouse's left/right button states, wheel delta, and position.

```rust title="turbo::input"
pub fn mouse(player: u32) -> Mouse<Button>
```

| Param    | Type  | Default | Description                       |
| :------- | :---- | :------ | :-------------------------------- |
| `player` | `u32` |         | The player to get mouse input for |

<details>
<summary>**`Mouse`**</summary>

```rust title="turbo::input"
/// Represents the state of the left and right mouse buttons.
#[repr(C, packed)]
#[derive(Clone, Copy, Debug, PartialEq, bytemuck::Pod, bytemuck::Zeroable)]
pub struct Mouse<T: Copy> {
    /// The state of the left mouse button.
    pub left: T,
    /// The state of the right mouse button.
    pub right: T,
    /// The mouse wheel delta.
    pub wheel: [i32; 2],
    /// The position position.
    pub position: [i32; 2],
}
```

</details>

<details>
<summary>**`Button`**</summary>

```rust title="turbo::input"
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Button {
    Released = 0,
    JustPressed = 1,
    Pressed = 2,
    JustReleased = 3,
}
```

</details>

### Basics

To retrieve the gamepad state of a player, use the `mouse` function. The player is `0`-indexed, so `0` is player 1, `1` is player 2, etc.

```rust
// Get the mouse state for player 1
let p1_mouse = mouse(0);
```

### Convenience Methods

The mouse input is similar to a gamepad except there are only two buttons – left and right.

```rust
// Get the mouse state for player 1
let m = mouse(0);

// Checks if the left mouse button is JustPressed (similar to a click)
if m.left.just_pressed() {
    // Handle JustPressed state
}

// Checks if the left mouse button is JustPressed or Pressed
if m.left.pressed() {
    // Handle JustPressed and Pressed states
}

// Checks if the left mouse button is JustReleased
if m.left.just_released() {
    // Handle JustReleased
}

// Checks if the left mouse button is JustReleased or Released
if m.left.released() {
    // Handle JustReleased and Released states
}
```

### A Simple Cursor

The mouse's position is also readily available. You can draw a small circular cursor at the mouse's position using the following snippet:

```rust
// Get the mouse state for player 1
let m = mouse(0);

// Get the mouse's x and y positions
let [mx, my] = m.position;

// Draw a circular cursor
circ!(d = 8, x = mx - 4, y = my - 4, fill = 0xff00ffff);
```
