I'll be honest - this CTF came much sooner than I thought it would. 

To get this challenge ready in time, I had to put together all of my cryptography tricks for one devious cryptosystem:

1. Use the Caesar cipher and shift each letter forward twice: `fgh` becomes `hij`
2. Hex-encode the text: `hij` becomes `68696a`
3. Apply ROT13 to the results: `68696a` becomes `68696n`
4. Apply ROT13 to the results one more time.
5. Apply ROT13 to the results a third time for extra safety.
6. Encode the ROT13-encrypted text with Base64.
7. Encrypt the Base64-encoded message with AES-128 with ECB mode using the key `overdonesecurity` and no padding.
8. Hex-encode the final message one last time for good measure.

Here is the encrypted message:

```
d5 e3 7e 6f ba 73 17 be 28 9a 43 fc ad 4f 7e 64 1f b0 f9 3e 9b 16 07 e8 30 67 33 40 43 3a 4d ec 3f d4 5d 3d 96 2c 4a 74 07 78 09 52 40 b4 70 b8 13 e9 8c 17 fe 79 79 ed 7d d5 68 42 17 aa 85 7c 86 f3 2c 0e 5c 32 a8 8b c8 f0 11 fb 12 1a 17 bb 9a e6 e8 fa c0 29 45 3a 7a 7a 0d 09 eb b5 e8 c5
```

Can you break the encryption?
