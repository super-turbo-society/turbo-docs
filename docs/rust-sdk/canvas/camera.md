# Camera

### Get camera position

```rust
let (x,y,z) = camera::xyz();
```

### Set camera position

```rust title="turbo::canvas"
camera::set_xy(100, 100);
```

The position you set here is the center of the viewport in pixels. By default the camera starts at half of the width and height of your game's resolution.

#
```rust title="turbo::canvas"
camera::move_x(5.0);
camera::move_y(8.0);
```
Moves the camera relative to the current camera position.

#
```rust title="turbo::canvas"
camera::focus_rect(100,100,10,20);
```

Use this to center the camera on a specific object, based on position and width and height.

### Set zoom level

```rust
camera::set_z(2.0);
```

### Reset camera

```rust title="turbo::canvas"
camera::reset();
```
