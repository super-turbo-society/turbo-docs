# RNG

## `rand`

Returns a random number.

```rust title="turbo::sys"
rand() -> u32
```

### Get random number

```rust
let n = rand();
```

### Get random number between 1 and 100

```rust
let n = 1 + (rand() % 100);
```

### Do a "coin flip"

To simulate a coin flip, you can test whether a random number is even:

```rust
let is_even = rand() % 2 == 0;
```
Or if you prefer, check that it's odd:

```rust
let is_odd = rand() % 2 != 0;
```

### Use probability ranges

You can introduce probability ranges by matching a random number in a range of numbers. Here's an example:

```rust
// Get a number between 1 and 100
let n = 1 + (rand() % 100);
match n {
    // Any number 1-10 (10% chance)
    1..=10 => { ... }
    // Any number 11-50 (40% chance)
    11..=50 => { ... }
    // Any other number (50% chance)
    _ => { ... }
}
```
