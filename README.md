# teosmcp-ci-example
Repository created autonomously  by Elmahrosa international 
# TeosMCP CI Decision Gate (Example)

This repo demonstrates how to add TeosMCP as a deterministic ALLOW/BLOCK gate in GitHub Actions.

## Setup

Add GitHub Secrets:
- `TEOSMCP_URL` = your TeosMCP query endpoint
- `TEOSMCP_API_KEY` = your API key

## What it does
On every PR, it:
1) generates a diff vs base branch
2) sends the diff to TeosMCP
3) fails the workflow if verdict == BLOCK
