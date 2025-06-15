# Turbo Docs

This repository contains the source files for [docs.turbo.computer](https://docs.turbo.computer), the official documentation portal for Turbo.

Turbo is a modern multiplayer game engine and real-time backend platform designed for online games, trustless simulation, and digital economies. Turbo helps indie teams build fast, flexible, multiplayer-first games using:

* Rust-based engine architecture
* WebGPU rendering
* WebAssembly runtime sandboxing
* Trustless game state with verifiable simulation

## Repository Purpose

This repository serves as:

* The canonical source for all Turbo developer documentation
* The content powering [docs.turbo.computer](https://docs.turbo.computer)
* Internal and external guides for engine usage, SDKs, APIs, deployment, and advanced systems

## Editing Docs

Documentation files live in the `docs/` directory and are primarily written in Markdown.

* Use clear, direct, and concise language.
* Favor code snippets and examples over abstract explanations.
* Keep sections modular to simplify future updates.

> **Note:** This repository does not contain the Turbo game engine source code — only the documentation.

## Contributing

We welcome contributions from Turbo users, team members, and trusted community developers.

### To contribute:

1. Fork the repo
2. Create a feature branch:

   ```bash
   git checkout -b your-branch-name
   ```
3. Make your edits and commit changes.
4. Push your branch and open a pull request.

### Style Guidelines

* Use consistent Markdown formatting.
* Prefer short paragraphs.
* Inline code should use backticks: `code`
* Code blocks should specify language:
  ````
  ```rust
  code goes here
  ```
  ````
* Keep headings under 3 levels deep.
* Avoid unnecessary links to external sites unless directly relevant.

## Deployment

Deployments are managed via GitHub Actions. Any merge to `main` automatically rebuilds and deploys the docs site.

## Contact

For questions or suggestions, [create an issue](https://github.com/super-turbo-society/turbo-docs/issues) reach out in the [Turbo developer Discord](https://discord.gg/makegamesfast).

---

**Turbo**
Make Games Fast
