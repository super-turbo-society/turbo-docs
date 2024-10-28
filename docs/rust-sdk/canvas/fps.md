# Frames Per Second

```rust title="turbo::canvas::fps"
pub const REALLY_SLOW: u32 = 1;
pub const SLOW: u32 = 2;
pub const MEDIUM: u32 = 4;
pub const FAST: u32 = 10;
pub const SUPER_FAST: u32 = 20;
```

Turbo automatically exports the following framerate constants from its canvas module:

- `fps::REALLY_SLOW`: Represents a really slow frame rate.
- `fps::SLOW` Represents a slow frame rate.
- `fps::MEDIUM`: Represents a medium frame rate.
- `fps::FAST`: Represents a fast frame rate.
- `fps::SUPER_FAST`: Represents a super fast frame rate.

:::tip

You can also manually adjust frame rates by specifying values between 1 and 60. This flexibility allows you to precisely control the speed of animations in your game.

:::