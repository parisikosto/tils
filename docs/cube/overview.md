---
sidebar_label: Overview
---

# Cube

[cube](https://github.com/parisikosto/cube) — a Go CLI I built for
automating Ubuntu VPS provisioning and secure initial server setup.

Turns a bare Ubuntu droplet into a hardened, Docker-ready server without
retyping the same 20 commands every time.

## Install

```sh
curl -sSL https://raw.githubusercontent.com/parisikosto/cube/main/install.sh | bash
```

## Quickstart

Run in order, on the same fresh box:

```sh
# 1. As root — system update, new sudo user, firewall
cube ubuntu-initial-setup

# 2. As the new user — Git, Docker, docker group
cube ubuntu-standard-setup
```

Full command reference: `cube --help`, or the
[README](https://github.com/parisikosto/cube#readme).
