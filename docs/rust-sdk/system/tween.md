# Tween
## `Tween<T>`
A generic struct that handles smooth transitions between values over time.
```rust title="turbo::tween"
pub struct Tween<T> {
pub start: T,
pub end: T,
pub duration: usize,
pub elapsed: usize,
pub easing: Easing,
pub start_tick: Option<usize>,
}
```
### Create a new tween
```rust
// Create a new tween starting at 0.0
let mut tween = Tween::new(0.0);
```
### Set a target
```rust
// Tween a value up to 100.0
tween.set(100.0);
```
### Set duration
```rust
// Tween will complete in 60 ticks
tween.duration(60);
```
### Set easing
```rust
// Use quadratic easing
tween.ease(Easing::EaseInQuad);
```
### Get current value of tween
```rust
// Get the current value of the tween
let current = tween.get();
```
### Check if complete
```rust
if tween.done() {
    // Tween has finished
}
```
### Add to target
```rust
// Add 10 to the end value
tween.add(10.0);
```

## Complete Example
Create a tween that moves across the screen horizontally.

```rust
turbo::init! {
    struct GameState {
        pos_tween: Tween<f32>,
    } = Self {
        // Set the initial values of an f32 tween
        pos_tween: {
            let mut t = Tween::new(0.0);
            t.end = 220.0;
            t.duration = 120;
            t.easing = Easing::EaseInOutQuad;
            t
        }
    }
}

turbo::go! {
    let mut state = GameState::load();
    // Get the current value of the tween
    let val = state.pos_tween.get();
    // Draw a circle using that value
    circ!(x = val, y = 72, d=8, color = 0x32CD32ff);
    state.save();
}
```

![Tween example showing smooth animation](/tween-example.gif)