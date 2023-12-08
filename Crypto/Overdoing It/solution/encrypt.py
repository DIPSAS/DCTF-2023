import string
import cryptography
import cryptography.hazmat.primitives.ciphers as ciphers
import codecs
import base64

secret = "d:ctf{looking-through-a-glass-onion}"

def caesar(plaintext, shift):
    alphabet = string.ascii_lowercase
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    table = str.maketrans(alphabet, shifted_alphabet)
    return plaintext.translate(table)

step1 = caesar(secret, 2)
step2 = bytes(step1, encoding='utf-8').hex()
step3 = codecs.encode(step2, 'rot13')
step4 = codecs.encode(step3, 'rot13')
step5 = codecs.encode(step4, 'rot13')
step6 = base64.b64encode(bytes(step5,encoding='utf-8'))

aes_key = bytes('overdonesecurity', encoding='utf-8')
aes_algo = ciphers.algorithms.AES128(aes_key)
aes_cipher = ciphers.Cipher(aes_algo, ciphers.modes.ECB())

encryptor = aes_cipher.encryptor()
step7 = encryptor.update(step6)
step8 = step7.hex(sep=' ')
print(step8)