# Config

When you initialize a project, you'll see a file called turbo.toml in your project directory. If you open that file, you should see something like this:

```rust title="turbo.toml"
name = "hello-world"
version = "0.1.0"
author = "Anonymous"
description = "An awesome game made in Turbo!"

[canvas]
width = 256
height = 144
```

This defines the config for your game. You can set the screen resolution by changing the canvas size. By default, Turbo games will resize and maintain this aspect ratio.

## Dynamic Resizing

If you want your project to dynamically resize to fill the whole window, instead of maintaing a fixed aspect ratio, change this value to:

```
[canvas]
auto-size = 1.0
```

The number here is the ratio of your game's canvas resolution to the window size. 