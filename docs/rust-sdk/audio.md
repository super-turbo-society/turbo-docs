# Audio

:::info Audio Setup

Follow these simple steps to integrate sound into your Turbo game:

1. **Create an `audio` Folder**

- Inside your project directory, create a folder named `audio`. This folder will contain all your sound files.

2. **Put Images in the Folder**

- The following image formats are supported: `.wav`, `.mp3`, `.ogg`, and `.flac`

:::

## Play Sound

Use `audio::play(&str)` to play a sound effect from your audio folder. For example, if your sound effect is named "coin.wav" you can play it with `audio:play("coin")`

## Looping sound

Loop a sound (like background music) like this:

```rust
if !audio::is_playing("background_music"){
    audio::play("background_music");
}
```

This will automatically restart the music once it ends.