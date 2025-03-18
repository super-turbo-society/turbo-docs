# Animation

Turbo makes animation easy by storing your animations and progressing them automatically. You can set and retreive the status of any animation with an `animation_key`. Once you have the key, you can adjust any settings on your animation, then call the `sprite!` macro using that animation key, and turbo will continue to progress the animation forward every frame.

##`SpriteAnimation`

A `SpriteAnimation` is the data structure that holds your animations values. Create a new key using `animation::get(&str)`, like this:

```rust
let anim = animation::get("key_value");
```

If there is no entry for the value you put in, then it will create a new animation. If the value exists already, then it will return that to you. `Then, you can change settings as needed, including setting the sprite that you want this animation to play:

```rust
let anim = animation::get("key_value");
// highlight-start
anim.use_sprite("turbi_idle"); // set the sprite file you want to use
anim.set_speed(1.5); // increase the speed of the animation
// highlight-end
```

Once you have our settings correct, you can call the `sprite!` macro to draw the animation:

```rust
let anim = animation::get("key_value");
anim.use_sprite("turbi_idle"); // set the sprite file you want to use
anim.set_speed(1.5); // increase the speed of the animation
// highlight-start
sprite!(animation_key = "key_value");
// highlight-end
```

:::tip

The `key_value` does not need to be the same string as the animted sprite file that you want to render on screen. Instead, it should be unique for each individual object that you want to animate. So if you have 10 different instances using the same sprite, they each need a unique key value - trying giving them an ID when you instance them, and add that on to the end of the `animation_key`.

:::

## Animation Settings

`SpriteAnimation` has a number of functions you can call to change it's values. The general pattern is that you can access a value, or change it set set_[value_name].

| Param         | Type                     | Default                         | Description                                                                                                            |
| ------------- | ------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| repeat        | usize                    | based on sprite export settings | How many times the sprite will play through it's animation before it stops.                                            |
| direction     | SpriteAnimationDirection | Forward                         | Which direction to play the animation (Forward, Backward, PingPong, PingPongReverse)                                   |
| fill_forwards | bool                     | false                           | When this is true, the animation stays on the last frame when it ends.   If it is false, it returns to the first frame |
| speed         | f32                      | 1.0                             | How fast the animation plays multiplied by the speed set in the export settings.                                       |
| delay         | f32                      | 0.0                             | The delay (in milliseconds) before the animation starts                                                                |
| paused        | bool                     | false                           | Pause the animation                                                                                                    |

#
There are also a few helpful functions you can call on your `SpriteAnimation`. 

| Function name    | Description                                          |
| ---------------- | ---------------------------------------------------- |
| use_sprite(&str) | The name of the sprite file to use on this animation |
| restart()        | Restarts the animation from the beginning            |
| pause()          | Pauses the animation                                 |
| resume()         | Resumes the animation                                |

## Transitioning animations

There are several ways you can transition between animations, but one of the simplest is to use the `default_sprite` field in the `sprite!` macro. This will check if the animation on that key is `done` and if it is, transition to the default sprite. This is great for any time you want to play an animation all the way through one time, the go back to a default. For example, if your character dashes, you could play the dash animation, but keep an idle animation as the default. Then, when the dash id done, you'll go back to the idle.

```rust
let anim = animation::get("player_character");
if gamepad(0).a.just_pressed(){
    anim.use_sprite("player_dash");
    a.set_repeat(1); // only play the animation 1 time
}
sprite!(
    animation_key = "player_character",
    default_sprite = "player_idle", // turbo will use this sprite once the dash animation has completed one loop
);
```

The `default_sprite` is used if the `animation_key` doesn't have a sprite assigned to it, or if the assigned animation is finished.

:::tip

If a sprite is set to loop infinitely, it will not return true for `.done`. Make sure to use `.set_repeat(1)` or adjust your export settings on that file if you always want it to only play once.

:::