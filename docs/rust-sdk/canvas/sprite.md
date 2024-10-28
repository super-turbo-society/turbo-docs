# Sprites

:::info Sprite Setup

Follow these simple steps to integrate sprites into your Turbo game:

1. **Create a `sprites` Folder**

- Inside your project directory, create a folder named `sprites`. This folder will contain all your game sprites.

2. **Put Images in the Folder**

- The following image formats are supported: `.png`, `.gif` (non-animated), `.webp`, and `.jpg`/`.jpeg`.

Now you're ready to draw some sprites!

:::

## `sprite!`

Sprites from your project's `sprites` folder can be drawn using the `sprite` macro.

```rust title="turbo::canvas"
sprite!(
    &str,
    x: i32,
    y: i32,
    w: u32,
    h: u32,
    color: u32,
    opacity: f32,
    rotate: i32,
    scale_x: f32,
    scale_y: f32,
    flip_x: bool,
    flip_y: bool,
    fps: u32,
)
```

| Param     | Type   | Default         | Description                                                      |
| :-------- | :----- | :-------------- | :--------------------------------------------------------------- |
| -         | `&str` | -               | The sprite's name (filename minus the extension)                 |
| `x`       | `i32`  | `0`             |                                                                  |
| `y`       | `i32`  | `0`             |                                                                  |
| `w`       | `u32`  | [sprite width]  |                                                                  |
| `h`       | `u32`  | [sprite height] |                                                                  |
| `color`   | `u32`  | `0xffffffff`    | Color that will overlay the sprite (multiplied)                  |
| `opacity` | `f32`  | `1.0`           | Sprite opacity - `0.0` = fully transparent. `1.0` = fully opaque |
| `rotate`  | `i32`  | `0`             | Degrees of rotation                                              |
| `scale_x` | `f32`  | `1.0`           | Horizontal scaling - `1.0` is 100% (aka, no scaling)             |
| `scale_y` | `f32`  | `1.0`           | Vertical scaling - `1.0` is 100% (aka, no scaling)               |
| `flip_x`  | `bool` | `false`         |                                                                  |
| `flip_y`  | `bool` | `false`         |                                                                  |
| `fps`     | `u32`  | `0`             |                                                                  |

### Static Sprites

By default, sprites are drawn statically (non-animated). To demonstrate display a sprite named "goblin" near the center of the screen with 180 degrees of rotation:

```rust
sprite!("goblin", x = 120, y = 50, rotate = 180);
```

And with that, we have ourselves an upside-down goblin:

![Goblin Sprite Screenshot](/goblin_sprite_screenshot.png)

Let's break it down:

- The first parameter (`"goblin"`) is the filename of your sprite excluding the file extension.
- Adjust the `x` and `y` parameters to position the sprite where you want it.
- Adjust the `rotate` parameter to control the sprite's degrees of rotation.

### Animated Sprites

Sprites with a landscape aspect ratio can be used like a "film strip" when the `fps` option is given. So if we have a sprite called `sprites/doge.png` that looks like this:

![Doge animation strip](/doge.png)

...and we write some code like this:

```rust
// Display a sprite named "doge" at specified position with a fast frame rate.
sprite!("doge", x = 112, y = 50, fps = fps::FAST);
```

...it will be rendered like this:

![Doge Sprite Screenshot](/doge_animation_screencap.gif)

[Read more about FPS &rarr;](/rust-sdk/canvas/fps)
