# Text

## `text!`

Draws ASCII text.

```rust title="turbo::canvas"
text!(&str, x: i32, y: i32, color: u32, font: Font)
```

| Param   | Type                                           | Default      | Description                                                 |
| :------ | :--------------------------------------------- | :----------- | :---------------------------------------------------------- |
| -       | `&str`                                         | -            | Text to be displayed                                        |
| `x`     | `i32`                                          | `0`          | Starting x position of the text                             |
| `y`     | `i32`                                          | `0`          | Starting y position of the text                             |
| `color` | `u32`                                          | `0xffffffff` | Hex color to display text in                                |
| `font`  | [`Font`](/docs/reference/rust-sdk/canvas/font) | `Font::M`    | Font to display text in: `Font::S`, `Font::M`, or `Font::L` |

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
    font = Font::S
);
```

![Greetings, Earthlings Screenshot](/greetings_earthlings_screenshot.png)
