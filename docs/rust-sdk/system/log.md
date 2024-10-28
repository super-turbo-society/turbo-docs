# Log

## `log!`

Logs a message to the `stdout` on native and to the devtools console on web.

```rust title="turbo::sys"
log!(&str, ...args)
```

:::tip Avoid Noisy Logs

You probably don't want to log a value every frame of your game loop. It can clutter your console and prevent you from seeing the useful information you may be looking for. Instead, try including logs only when a specific action happens such as a keypress or mouse click.

:::

### Log a static message

```rust
log!("hello!");
```

### Interpolate variables

Log your game state:

```rust
let state = GameState::load();
log!("My game state = {:?}", state);
```

You can interpolate multiple vars:

```rust
let [canvas_width, canvas_height] = canvas_size!();
log!("Canvas - width = {:?}, height = {:?}", canvas_width, canvas_height);
```
