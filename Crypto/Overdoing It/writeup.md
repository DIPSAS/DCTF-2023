For each step:

1. Use the Caesar cipher and shift each letter forward twice
2. Hex-encode the text
3. Apply ROT13 to the results
4. Apply ROT13 to the results
5. Apply ROT13 to the results
6. Encode the ROT13-encrypted text with Base64
7. Encrypt the Base64-encoded message with AES-128 in ECB mode using the key `overdonesecurity` and no padding
8. Hex-encode the final message

We perform the steps in reverse order:

1. Hex-decode the text
2. Decrypt the AES-encrypted message (remembering to set the correct mode)
3. Base64-decode the message
4. Apply ROT13 (it does not matter whether we do it once or thrice)
5. Hex-decode the text
6. Shift each letter back twice

This can be done with the CyberChef recipe:

```
From_Hex('Auto')
AES_Decrypt({'option':'UTF8','string':'overdonesecurity'},{'option':'Hex','string':''},'ECB/NoPadding','Raw','Raw',{'option':'Hex','string':''},{'option':'Hex','string':''})
From_Base64('A-Za-z0-9+/=',true,false)
ROT13(true,true,false,13)
From_Hex('Auto')
ROT13(true,true,false,-2)
```

which gives us the key `d:ctf{looking-through-a-glass-onion}`
