---
title: Ten Linux networking commands I use every week
description: From ip and ss to dig and curl, the small set of tools that answers most "why can't I connect?" questions.
date: 2026-09-22
category: linux
tags: [linux, networking, troubleshooting]
placeholder: true
---

When something will not connect, I work from the bottom of the stack upward. These ten commands cover nearly every case.

## Layer by layer

```bash
ip -br addr            # 1. interfaces and addresses, brief
ip route               # 2. where does traffic go by default?
ping -c 3 1.1.1.1      # 3. can I reach the internet by IP?
dig +short example.com # 4. does DNS resolve?
ss -tulpn              # 5. what is listening on this machine?
curl -I https://example.com   # 6. does HTTP respond, and with what headers?
traceroute example.com # 7. where does the path break?
```

If step 3 works but step 4 fails, the problem is DNS and nothing else.

## Looking at what is happening

```bash
sudo tcpdump -i any -n port 443 -c 20   # 8. watch real packets
sudo journalctl -u nginx --since "10 min ago"  # 9. service logs
nc -vz 10.0.0.5 5432   # 10. is that specific port reachable?
```

## A mental checklist

1. **Link:** is the interface up and addressed?
2. **Route:** is there a path out?
3. **Name:** does DNS answer?
4. **Port:** is something listening, and is a firewall in the way?
5. **App:** does the service itself respond correctly?

Most "network problems" are in the last two steps.
