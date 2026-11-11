---
title: Three Terraform state mistakes I made so you do not have to
description: Local state, secrets in plain text and a missing lock. A beginner's tour of what goes wrong and the fixes.
date: 2026-07-14
category: devops
tags: [terraform, aws, iac, devops]
placeholder: true
---

Terraform is easy to start and easy to misuse. These are the three mistakes that taught me the most.

## 1. Keeping state on my laptop

State is Terraform's memory of what it built. Lose the file and Terraform forgets your infrastructure. The fix is a remote backend with locking:

```hcl
terraform {
  backend "s3" {
    bucket         = "my-team-tf-state"
    key            = "prod/network.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "tf-locks"
    encrypt        = true
  }
}
```

## 2. Secrets in state

State files can contain secrets in plain text, such as database passwords. Treat the bucket like a vault: encryption on, public access blocked, narrow IAM permissions, versioning enabled.

## 3. No plan review

Running `apply` directly is how a typo deletes a database. Always review the plan first:

```bash
terraform fmt -check
terraform validate
terraform plan -out=tfplan
terraform apply tfplan
```

In CI, post the plan to the pull request so a teammate approves it.

## A rule I now follow

If I would not be comfortable reading the plan aloud to a teammate, I do not apply it.
