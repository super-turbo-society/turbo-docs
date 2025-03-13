# Sprites

:::info Sprite Setup

Follow these simple steps to integrate sprites into your Turbo game:

1. **Create a `sprites` Folder**

- Inside your project directory, create a folder named `sprites`. This folder will contain all your game sprites.

2. **Put Images in the Folder**

- The following image formats are supported: `.png`, `.gif`, `.webp`, `.ase` and `.jpg`/`.jpeg`.

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
    rotation: i32,
    scale_x: f32,
    scale_y: f32,
    flip_x: bool,
    flip_y: bool,
)
```

To draw a sprite, simply call the macro and include any parameters you need. The only one that is required is the file name (minus the extension):

```rust
sprite!("goblin", x = 120, y = 50, rotate = 180);
```

And with that, we have ourselves an upside-down goblin:

![Goblin Sprite Screenshot](/goblin_sprite_screenshot.png)

Let's break it down:

- The first parameter (`"goblin"`) is the filename of your sprite excluding the file extension.
- Adjust the `x` and `y` parameters to position the sprite where you want it.
- Adjust the `rotate` parameter to control the sprite's degrees of rotation.


| Param      | Type   | Default         | Description                                                      |
| :--------- | :----- | :-------------- | :--------------------------------------------------------------- |
| -          | `&str` | -               | The sprite's name (filename minus the extension)                 |
| `x`        | `i32`  | `0`             |                                                                  |
| `y`        | `i32`  | `0`             |                                                                  |
| `w`        | `u32`  | [sprite width]  |                                                                  |
| `h`        | `u32`  | [sprite height] |                                                                  |
| `color`    | `u32`  | `0xffffffff`    | Color that will overlay the sprite (multiplied)                  |
| `opacity`  | `f32`  | `1.0`           | Sprite opacity - `0.0` = fully transparent. `1.0` = fully opaque |
| `rotation` | `i32`  | `0`             | Degrees of rotation                                              |
| `scale_x`  | `f32`  | `1.0`           | Horizontal scaling - `1.0` is 100% (aka, no scaling)             |
| `scale_y`  | `f32`  | `1.0`           | Vertical scaling - `1.0` is 100% (aka, no scaling)               |
| `flip_x`   | `bool` | `false`         |                                                                  |
| `flip_y`   | `bool` | `false`         |                                                                  |


### Animated Sprites

The sprite macro will follow any animation rules set in the file, so if you use an animated file type (like .gif or .webp), it will animate automatically.

![Animated Doge](/doge.webp)

So if we write some code like this:

```rust
// Display a sprite named "doge".
sprite!("doge", x = 112, y = 50);
```

...it will be rendered like this:

![Doge Sprite Screenshot](/doge_animation_screencap.gif)

The speed and playback settings of the animation are determined by the settings on your file.

If you want more control over your animations, check out the animation docs:

[Advanced Animation &rarr;](/rust-sdk/canvas/animation)
