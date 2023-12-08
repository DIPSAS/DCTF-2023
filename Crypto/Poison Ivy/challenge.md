After having all of my clever cryptographic schemes ruined by CTF contestants, I am begrudgingly forced to use industry-standard cryptography.

I have settled on using [AES-128](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) in the CTR [counter mode](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Counter_(CTR)), so I can encrypt flags of every size. I have also found a password generator to generate a random 16-byte key, stopping people from just guessing keys from the dictionary. 

The one annoying problem is that this scheme also forces me to pick a random _initialization vector_. Since it doesn't have to be secret like the key, I have solved this problem by rolling a die and picking a completely random value, which we use for every message:

`IV = 0x00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 04`

Under this system, I can encrypt the message

`just-start-a-brand-new-story`

and get the encrypted (hex-encoded) ciphertext:

`5360de14285d636a28ce3015eafbac199d6cef51e046e76ede7dcd9d`

I have now encrypted the flag with the same key and IV, giving me the ciphertext

`5d2fce14635564642fd47907eaf5b7139625b05af042af79877bc999`

Surely you can't find the flag now?

Hint 1: The IV does not have to be secret, but it should be unpredictable, especially when used with the same key - why? Looking up "nonce reuse" may be helpful.

Hint 2: CTR works by calculating an exclusive-or of the plaintext and the encryption of the IV and counter - what happens to the latter if the IV is fixed, and the counter always starts at zero?

Hint 3: Remember that XOR is its own inverse - performing exclusive-or with the same string of bits twice will cancel it out: A XOR B XOR B = A, B XOR A XOR B = A
