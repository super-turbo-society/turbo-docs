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
  -w, --watch                    Uses cargo-watch to recompile your game code automatically
  -A, --always-on-top            Makes the game window always appear on top of other windows
      --clippy                   Clippy mode
      --os-api-url <OS_API_URL>  Will create and authenticate as a new a guest user [default: https://os.turbo.computer]
  -p, --program-id <PROGRAM_ID>  The Turbo OS program ID to create/update. Must be globally unique [default: ]
  -u, --user <USER>              The user ID to authenticate as. This will prompt for entry of a time-based code [default: ]
      --guest                    Will create and authenticate as a new a guest user
      --clear-cache              Removes the current cached build
  -c, --config <CONFIG>          The path to the config file [default: ]
  -h, --help                     Print help
  -V, --version                  Print version
```