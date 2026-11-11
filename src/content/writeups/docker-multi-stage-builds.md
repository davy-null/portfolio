---
title: "Docker multi-stage builds: smaller, safer images"
description: How splitting a build into stages cut an image from hundreds of megabytes to a few dozen, and why that helps security too.
date: 2026-09-08
category: devops
tags: [docker, ci-cd, devops, security]
placeholder: true
---

A Docker image that ships your compiler, test tools and source is bigger and easier to attack than it needs to be. Multi-stage builds fix that.

## The idea

Build in one stage. Copy only the finished artifact into a clean, minimal final stage.

```dockerfile
# ---- build stage ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runtime stage ----
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

The final image contains Nginx and static files. No Node, no `node_modules`, no source.

## Why it matters

- **Size:** fewer layers and fewer packages to download on every deploy.
- **Attack surface:** tools an attacker would love, such as shells and package managers, are not in the image.
- **Cache:** copying `package*.json` first means dependencies are only reinstalled when they change.

## Quick wins on top

```bash
docker build -t site:latest .
docker image ls site            # check the size
docker run --rm -p 8080:80 site:latest
```

Add a `.dockerignore` for `node_modules`, `.git` and `.env` so secrets and junk never enter the build context.

## In CI

The same Dockerfile runs unchanged in GitHub Actions, so what you test locally is what you ship.
