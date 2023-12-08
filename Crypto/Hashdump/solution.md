Once we identify the hash function as md5 we can crack the passwords (either by hashing a known list of passwords like rockyou.txt or by simply Googling it) we get this table:

```
abu, digger
hel, okidoki
meg, tigris
keg, abbalove
buf, :)smile
dit, takker
nei, }miriam123
fig, {buffy}12
jeg, sikkerhetsnål
ghf, n!ntendo
lim, l0ckdown
efg, fin1999
cat, catbird83
ilk, -OhMyGosh-
```

Sorting these alphabetically by the username, we can finally see the pattern:

```
abu, digger
buf, :)smile
cat, catbird83
dit, takker
efg, fin1999
fig, {buffy}12
ghf, n!ntendo
hel, okidoki
ilk, -OhMyGosh-
jeg, sikkerhetsnål
keg, abbalove
lim, l0ckdown
meg, tigris
nei, }miriam123
```

The first letters of each password make up the flag: `d:ctf{no-salt}`
