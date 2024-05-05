# `turbo host`

```md
Runs a Turbo host

Usage: turbo host [OPTIONS] [PROJECT_DIR]

Arguments:
  [PROJECT_DIR]  The directory where your game's code and assets live [default: .]

Options:
  -p, --players <PLAYERS>
          Number of player to connect to for before starting the game [default: 1]
      --protocol-version <PROTOCOL_VERSION>
          Protocol version to use [default: 2]
      --fps <FPS>
          The frames-per-second to run the game at (Turbonet protocol v2+) [default: 60]
      --frame-resend-limit <FRAME_RESEND_LIMIT>
          Frame resend limit. Higher values require more bandwidth but may result in less latency and more reliability. (Turbonet protocol v2+) [default: 1]
      --sleep-micros <SLEEP_MICROS>
          Microsends to sleep per loop on the execution thread. (Turbonet protocol v2+) [default: 1000]
  -h, --help
          Print help
  -V, --version
          Print version
```