---
title: Why a plain SHA-256 hash is not a password system
description: Building a tiny C++ login with OpenSSL taught me what salting actually prevents, and why real systems use slow hashes.
date: 2026-08-20
category: programming
tags: [cpp, cryptography, openssl, security]
placeholder: true
---

I built a command line login in C++ to understand password storage. The first version hashed passwords with SHA-256 and felt secure. It was not.

## The problem with a bare hash

Identical passwords produce identical hashes. An attacker with a stolen database can precompute hashes of common passwords (a rainbow table) and match them instantly.

## What a salt changes

A **salt** is a random value stored next to the hash and mixed in before hashing. Two users with the same password now get different hashes, and precomputed tables stop working.

```cpp
#include <openssl/sha.h>
#include <openssl/rand.h>
#include <array>
#include <string>

std::array<unsigned char, 16> make_salt() {
    std::array<unsigned char, 16> salt{};
    RAND_bytes(salt.data(), salt.size());   // cryptographically secure random
    return salt;
}

std::array<unsigned char, SHA256_DIGEST_LENGTH>
hash_password(const std::string& pw, const std::array<unsigned char, 16>& salt) {
    std::string input(salt.begin(), salt.end());
    input += pw;
    std::array<unsigned char, SHA256_DIGEST_LENGTH> out{};
    SHA256(reinterpret_cast<const unsigned char*>(input.data()), input.size(), out.data());
    return out;
}
```

## What a salt does not fix

SHA-256 is **fast**, which is exactly wrong for passwords. An attacker can try billions of guesses per second on a GPU. Production systems use deliberately slow, memory-hard functions:

- **Argon2id** (the current recommendation)
- **bcrypt** or **scrypt** as solid alternatives

## Lessons

1. Salt every password with a unique random value.
2. For anything real, use Argon2id from a maintained library. Do not write your own.
3. Compare hashes in constant time so timing does not leak information.

My toy project taught me more by being wrong first.
