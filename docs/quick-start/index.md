---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Quick Start

<img src={require("./img/game-jam-smol.png").default} style={{ width: "100%", imageRendering: "pixelated", borderRadius: 8 }} />
<br />
<br />

:::info Prerequisites

Before installing the Turbo CLI, ensure you have [Rust](https://www.rust-lang.org/) with the wasm target:

<details>
    <summary>**How to install Rust + wasm**</summary>
    
    On MacOS, Linux, or another Unix-like OS, run the following command:
    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```
    
    On Windows, download and run [`rustup-init.exe`](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe).

    If needed, you can find more info on [Rust's installation docs &rarr;](https://www.rust-lang.org/tools/install)

    Once installed, run the following command to add the WebAssembly target:

    ```bash
    rustup target add wasm32-unknown-unknown
    ```

</details>

:::

## Installation

<Tabs>
    <TabItem value="MacOS_Linux" label="MacOS / Linux" default>
        Install `turbo` by running this script:

        ```bash
        curl -sSfL https://turbo.computer/install.sh | sh
        ```

        <Admonition type="note" title="Install script alternative">
            The installer will ask for your password to place the command in `/usr/local/bin`. If you don't want to rely on the install script, you can [manually download the cli](/docs/reference/cli/#versions) and place it somewhere in your `$PATH`.
        </Admonition>


        Verify your installation with the following command:

        ```bash
        turbo -h
        ```

        If successful, it will output `turbo`'s help documentation.
    </TabItem>

    <TabItem value="Windows_MSVC" label="Windows (MSVC)">
        <Admonition type="info" title="Prerequisite">
            Make sure you have [Git for Windows](https://git-scm.com/download/win) installed.
        </Admonition>

        Follow these steps to install `turbo` on Windows:

        - Download the 64-bit release for [Windows MSVC](https://github.com/super-turbo-society/turbo-cli/releases/download/0.2.12/turbo-0.2.12-x86_64-pc-windows-msvc.zip).
        -  Unzip the file and move `turbo.exe` into `C:\Windows\System32`.

        **Open Git Bash**. Verify your installation with the following command:

        ```bash
        turbo -h
        ```

        If successful, it will output `turbo`'s help documentation.
    </TabItem>

    <TabItem value="Windows_MinGW" label="Windows (GNU)">
        <Admonition type="info" title="Prerequisite">
            Make sure you have [MSYS with MinGW](https://www.msys2.org/) installed.
        </Admonition>


        Follow these steps to install `turbo` on Windows with MinGW:

        - Download the 64-bit release for [Windows GNU](https://github.com/super-turbo-society/turbo-cli/releases/download/0.2.12/turbo-0.2.12-x86_64-pc-windows-gnu.zip).
        - Unzip the file and move `turbo.exe` into `/usr/local/bin`.

        **Open your MinGW shell**. Verify your installation with the following command:

        ```bash
        turbo -h
        ```

        If successful, it will output `turbo`'s help documentation.

    </TabItem>

</Tabs>

## Hello, World!

Now it is time to speedrun your first Turbo game. It should take less than 5 minutes.

### 1. Initialize

Begin by creating a new project called `hello-world`:

```
turbo init hello-world
```

This initializes a rust crate in a `hello-world` directory.

### 2. Run

Next, run your game with the following command:

```
turbo run -w hello-world
```

A game window should appear.

![Turbo game window with the text "Hello, world!!!"](./img/hello-world.png)

:::note

The `-w` flag auto-refreshes your game window as you code. Just be sure to watch the console for compiler errors.

:::

### 3. Update

Leave the `turbo run` command running. Open the `hello-world` project in your preferred editor.

Now, open `hello-world/src/lib.rs`. You should see something like this:

```rust title="hello-world/src/lib.rs" showLineNumbers
// This is where your main game loop code goes
// The stuff in this block will run ~60x per sec
turbo::go! {
    text!("Hello, world!!!");
}
```

Time for your first update. Modify the text and check out your game window:

```rust title="hello-world/src/lib.rs" showLineNumbers
// This is where your main game loop code goes
// The stuff in this block will run ~60x per sec
turbo::go! {
    // highlight-start
    text!("Yuuurrr!");
    // highlight-end
}
```

![Turbo game window with the text "yuuurrr!!!"](./img/yuuurrr.png)

If you want to keep playing around, the `text!` macro has several optional parameters you can experiment with:

```rust title="hello-world/src/lib.rs" showLineNumbers
// This is where your main game loop code goes
// The stuff in this block will run ~60x per sec
turbo::go! {
    // highlight-start
    text!(
        "Let's gooo!",      // Text to display
        x = 32,             // Starting x position of the text
        y = 48,             // Starting y position of the text
        color = 0xff00ffff, // Text color
        font = Font::L      // Text font (other options: Font::S and Font::M)
    );
    // highlight-end
}
```

## Next Steps

Congratulations! 🎉

Here are a few ways to continue your game development journey:

- [Join the Discord community &rarr;](https://discord.gg/Mry2mFbY4D)
- [Get comfy with a tutorial that covers the basics &rarr;](/docs/tutorials)
- [Browse through the Rust SDK reference &rarr;](/docs/reference/rust-sdk/getting-started)
- [See our "How To" section to quickly learn new concepts &rarr;](/docs/how-to)
- [Explore the possibilities in our demo games repo &rarr;](https://github.com/super-turbo-society/turbo-demos/tree/main?tab=readme-ov-file#-turbo-demo-games)

<br />
