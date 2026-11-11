---
title: "Assessing DVWA against the OWASP Top 10: how I structured the report"
description: Finding bugs is half the job. Here is the report structure I used so developers could actually fix what I found.
date: 2026-08-02
category: cybersecurity
tags: [owasp, web-security, reporting, dvwa]
placeholder: true
---

DVWA (Damn Vulnerable Web Application) is deliberately insecure, which makes it a safe place to practise. I wanted to practise something harder than exploitation: **writing the report**.

## Run it in isolation

```bash
docker run --rm -p 8081:80 vulnerables/web-dvwa
```

Keep it on localhost or an isolated lab network. Never expose it to the internet.

## Structure of each finding

Every issue got the same five parts:

1. **Title and OWASP category**, for example *A03 Injection*.
2. **Where:** the exact page and parameter.
3. **Impact:** what an attacker gains, in plain words.
4. **Evidence:** the request, the response and a screenshot.
5. **Fix:** the specific code or configuration change.

## Example fix, written for a developer

For a SQL injection finding, the fix is parameterised queries:

```php
// vulnerable
$q = "SELECT * FROM users WHERE id = '$id'";

// fixed
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id');
$stmt->execute(['id' => $id]);
```

## Rating severity

I scored each finding on likelihood and impact, then sorted the report so the top three were the ones to fix first. A flat list of twenty bugs gets ignored. A ranked list gets worked.

## Takeaway

The report is the product. A vulnerability nobody understands is a vulnerability nobody fixes.
