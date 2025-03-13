# Nine-Slice

Use Nine Slice sprites to create UI elements, like buttons and text boxes, that can be resized without distorting the borders.

## Create a Nine-Slice from a sprite

To make a `nine_slice` turbo needs to know the sprite file and the margin. The margin is the distance in pixels from each corner to the next edge, moving clockwise.

```rust
// create a nine_slice from the file 'nslice' with an 8px margin on each side
let nine_slice = NineSliceSprite::new(sprite("nslice"), (8,8,8,8)); 
```
Once we have a `nine_slice`, we can adjust the values directly like this:

```rust
let nine_slice = NineSliceSprite::new(sprite("nslice"), (8,8,8,8))
        .position(0, 0)
        .size(100, 80); 
```

Finally, we can use `draw` to render it onto the screen

```rust
 let nine_slice = NineSliceSprite::new(sprite("nslice"), (8,8,8,8))
        .position(0, 0)
        .size(100, 40);
        .draw();
```