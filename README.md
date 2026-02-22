# 🏺 TeosMCP CI Example

### Deterministic Decision Gate for GitHub Actions

[![CI](https://img.shields.io/badge/GitHub-Actions-blue?logo=githubactions)](#)
[![Deterministic Enforcement](https://img.shields.io/badge/Mode-ALLOW%20%2F%20BLOCK-critical)](#)
[![MCP Server](https://img.shields.io/badge/MCP-Server-success)](#)

Repository created by **Elmahrosa International**

---

## Overview

`teosmcp-ci-example` demonstrates how to integrate **TeosMCP** as a deterministic **ALLOW / BLOCK** enforcement layer inside GitHub Actions.

Unlike traditional scanners that detect issues retrospectively, this workflow enforces decisions **before merge or deploy** by evaluating pull request diffs in real time.

TeosMCP acts as a **decision firewall** for CI/CD and autonomous pipelines.

---

## Repository Structure

```bash
teosmcp-ci-example/
├── .github/workflows/teosmcp.yml
├── scripts/teosmcp-gate.sh
└── README.md
```

---

## What This Example Does

On every pull request:

1. Generates a diff against the base branch
2. Sends the diff to the TeosMCP API
3. Receives a deterministic verdict
4. Fails the workflow if the verdict is `BLOCK`

This ensures unsafe changes never reach production.

---

## Workflow Logic

```
Pull Request
      ↓
Generate Diff
      ↓
Send to TeosMCP
      ↓
Receive Deterministic Verdict
      ↓
ALLOW → Continue pipeline
BLOCK → Fail workflow
```

This creates a zero-trust enforcement layer inside CI/CD.

---

## Setup Instructions

### 1️⃣ Add Required GitHub Secrets

In your repository settings:

* `TEOSMCP_URL` → Your TeosMCP API endpoint
* `TEOSMCP_API_KEY` → Your API authentication key

### 2️⃣ Commit Required Files

Ensure these files exist:

* `.github/workflows/teosmcp.yml`
* `scripts/teosmcp-gate.sh`

Push to your repository.

The enforcement gate will now run automatically on pull requests.

---

## Deterministic Enforcement Model

TeosMCP guarantees:

* Same input → same output
* Execution-time enforcement
* No probabilistic AI behavior
* Audit-ready decision flow

This is governance enforcement — not suggestion.

---

## Why This Matters

Autonomous pipelines and AI-generated code execute instantly.

Without deterministic enforcement:

* Secrets leak
* Unsafe merges pass
* Misconfigurations deploy automatically

TeosMCP blocks execution before damage occurs.

---

## Ecosystem Listings

TeosMCP is publicly listed and recognized in the MCP ecosystem:

* 🔗 MCP Server Listing
  [https://mcp.so/server/teos-mcp-%E2%80%94-agent-code-risk-firewall/Elmahrosa](https://mcp.so/server/teos-mcp-%E2%80%94-agent-code-risk-firewall/Elmahrosa)
---

## License

This repository is provided as a public integration example for TeosMCP.

---
