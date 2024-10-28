# Buttons

Turbo provides convenient ways to handle gamepad and mouse input from players, allowing you to make your games interactive.

Both gamepad and mouse controls use the `Button` enum to represent the input state of their buttons:

- `Button::JustPressed` - The button was just pressed this frame.
- `Button::Pressed` - The button has been held for more than one frame.
- `Button::JustReleased` - The button was just released this frame.
- `Button::Released` - The button has been released for more than one frame.

By default, all buttons are in the `Released` state when no input is detected.

```rust title="turbo::input"
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Button {
    Released = 0,
    JustPressed = 1,
    Pressed = 2,
    JustReleased = 3,
}

```