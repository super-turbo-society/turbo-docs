---
sidebar_position: 1
---

# `turbo run`

```md
Runs a Rust Turbo project

Usage: turbo run [OPTIONS] [PROJECT_DIR]

Arguments:
  [PROJECT_DIR]  The directory where your game's code and assets live [default: .]

Options:
  -w, --watch                          Uses cargo-watch to recompile your game code automatically
  -A, --always-on-top                  Makes the game window always appear on top of other windows
  -x, --canvas-width <CANVAS_WIDTH>    The game's x resolution [default: 256]
  -y, --canvas-height <CANVAS_HEIGHT>  The game's y resolution [default: 144]
      --window-width <WINDOW_WIDTH>    The window's initial width [default: 768]
      --window-height <WINDOW_HEIGHT>  The window's initial height [default: 432]
      --clippy                         Clippy mode
  -h, --help                           Print help
  -V, --version                        Print version
```