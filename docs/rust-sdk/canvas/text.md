# Text

## `text!`

Draws ASCII text.

```rust title="turbo::canvas"
text!(
    "" = &str,
    x = i32, 
    y = i32, 
    color = u32, 
    font = "size"
)
```

| Param   | Type   | Default      | Description                                                  |
| :------ | :----- | :----------- | :----------------------------------------------------------- |
| `""`    | `&str` | -            | Text to be displayed                                         |
| `x`     | `i32`  | `0`          | Starting x position of the text                              |
| `y`     | `i32`  | `0`          | Starting y position of the text                              |
| `color` | `u32`  | `0xffffffff` | Hex color to display text in                                 |
| `font`  | `&str` | `"medium"`   | Size to display text in: `"small"`, `"medium"`, or `"large"` |

:::note

For font sizes Turbo has "small", "medium", and "large" available by default.

:::

### Basic Usage

```rust
text!("Hello, world!");
```

![Hello, World Screenshot](/hello_world_screenshot.png)

### Advanced Usage

Customized text with specified position, color, and font size:

```rust
text!(
    "Greetings, earthlings >:3",
    x = 30,
    y = 40,
    color = 0x00ff00ff,
    font = "small"
);
```

![Greetings, Earthlings Screenshot](/greetings_earthlings_screenshot.png)

### Custom Fonts

You can add custom fonts by creating a folder called `fonts` and adding a font file in there. Then call the font by using it's name (minus the file extension).

```rust
text!("Magic Missile!!", font = "OldWizard");
```

![Magic Missile Screenshot](/magic_missile_screenshot.png)

:::tip

Head over to [Font](/rust-sdk/canvas/font) to learn more about custom fonts!

:::