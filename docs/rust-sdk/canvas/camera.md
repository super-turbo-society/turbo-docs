# Camera

## `cam!`

Gets the camera position.

```rust title="turbo::canvas"
cam!() -> [i32; 2]
```

### Get camera position

```rust
let [camera_x, camera_y] = cam!();
```

## `set_cam!`

Sets the camera position.

```rust title="turbo::canvas"
set_cam!(x: i32, y: i32)
```

| Param | Type  | Default              | Description                     |
| :---- | :---- | :------------------- | :------------------------------ |
| `x`   | `i32` | [current x position] | The camera x position in pixels |
| `y`   | `i32` | [current y position] | The camera y position in pixels |

### Set camera position

```rust
set_cam!(x = 0, y = 0); // set x and y position
set_cam!(x = 10); // set x position only
set_cam!(y = 10); // set y position only
```

## `move_cam!`

Moves the camera relative to the current camera position.

```rust title="turbo::canvas"
move_cam!(x: i32, y: i32)
```

| Param | Type  | Default | Description                                      |
| :---- | :---- | :------ | :----------------------------------------------- |
| `x`   | `i32` | `0`     | The amount to adjust camera x position in pixels |
| `y`   | `i32` | `0`     | The amount to adjust camera y position in pixels |

### Move the camera

```rust
move_cam!(x = 4, y = 8); // move x position 4 pixels and y position 8 pixels
move_cam!(x = 10); // set x position 10 pixels
move_cam!(y = 10); // set y position 10 pixels
```
