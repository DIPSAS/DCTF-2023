The CTR mode works by calculating the XOR of the plaintext `p` and the cipherstream `F(k, IV, counter)`:

`c = p XOR F(k, IV, counter)`

If the key and IV are fixed, `f = F(k, IV, counter)` is identical for all plaintexts. We can use this to decrypt any ciphertext given a known plaintext-ciphertext pair:

`c1 = p1 XOR f`
`c2 = p2 XOR f`

`c1 XOR c2 = p1 XOR f XOR p2 XOR f = p1 XOR p2`

`p2 = c2 XOR c1 XOR p1`

We know one plaintext-ciphertext pair:

`p1 = just-start-a-brand-new-story`
`c1 = 0x5360de14285d636a28ce3015eafbac199d6cef51e046e76ede7dcd9d`

Given the ciphertext `c2 = 0x5d2fce14635564642fd47907eaf5b7139625b05af042af79877bc999` we can compute `c2 XOR c1 XOR p1` to get the flag: `d:ctf{sounds-like-reused-iv}`

(The key is `96de3cf90a8c660700c76e74633fd48c` and the IV is `IV = 0x00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 04`)