# Hello World Plugin

A simple OpenClaw plugin for testing extension development.

## Installation

Copy to `~/.openclaw/extensions/hello-world/`

```bash
git clone https://github.com/ericandersonopenclaw/openclaw-hello-world-plugin.git ~/.openclaw/extensions/hello-world
```

## Files

- `index.ts` - Plugin entry point
- `openclaw.plugin.json` - Plugin manifest
- `package.json` - Package metadata

## Development

```bash
# Make changes to index.ts
# Restart OpenClaw gateway to reload:
openclaw gateway restart
```

## Notes

This plugin demonstrates the minimal structure needed for an OpenClaw plugin. It loads automatically when placed in `~/.openclaw/extensions/`.
