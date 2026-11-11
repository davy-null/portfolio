---
title: "Scanning a lab network with Nmap: a practical first pass"
description: A repeatable Nmap workflow for HackTheBox and TryHackMe style labs, from discovery to service detection to saving your results.
date: 2026-10-05
category: cybersecurity
tags: [nmap, enumeration, networking, labs]
featured: true
placeholder: true
---

Enumeration is where most lab time is won or lost. A disciplined first scan saves hours later.

> Only scan machines you own or have explicit permission to test. Lab platforms such as HackTheBox and TryHackMe are built for this.

## Step 1: fast, wide, noisy-but-fine

In a lab, speed is acceptable. Scan every TCP port first:

```bash
nmap -p- --min-rate 2000 -T4 -oN all-ports.txt 10.10.10.10
```

## Step 2: go deep on what is open

Take the open ports and run default scripts and version detection against just those:

```bash
ports=$(grep -oP '^\d+(?=/tcp\s+open)' all-ports.txt | paste -sd,)
nmap -sC -sV -p "$ports" -oA detailed 10.10.10.10
```

`-oA` saves three formats at once, which is handy when you want to grep, diff or import later.

## Reading the output

| Port | Service | First question to ask |
| --- | --- | --- |
| 22 | SSH | Is the version old? Are there reused credentials elsewhere? |
| 80/443 | HTTP | What framework is this, and what directories exist? |
| 139/445 | SMB | Is anonymous access allowed? Is the host patched? |

## Checking a known weakness safely

Nmap ships scripts that *check* for known issues without exploiting them. For example, the SMB vulnerability behind MS17-010 can be detected like this:

```bash
nmap -p445 --script smb-vuln-ms17-010 10.10.10.10
```

A positive result belongs in a report with a recommendation to patch, not in a rush to exploit.

## Habits worth keeping

1. Always save output to files, named by host.
2. Re-scan after you gain new access. The network looks different from the inside.
3. Write down what each open port could mean before you pick a target.
