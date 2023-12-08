PART ONE
Inspecting the login element of the web-page, we see that someone left a comment about a password.
Since it was the admin who spread the flags, let us try to log in with the user: `admin`(sometimes we just have to guess) and password `admin123`
That should give us: `d:ctf{part-one-the-admin-had}`

PART TWO
The intro text of the company looks as uninteresting as any other, but if we look at the source, we see that the word "secret" in the second paragraph is actually a cleverly disguised link to the second flag: `d:ctf{part-two-four-very-secret}`

PART THREE
One of the employees has a flag in his hand. It's also the only image that we can actually get from the server. Inspecting the headers of the response when clicking the image, reveals the third flag: `d:ctf{part-three-flags-you-have}`

PART FOUR
The clue to the final flag is the unfortunate seventh employee. Might his avatar still exist on the server? Inspecting the source, we can reconstruct the URL:
`/static/images/employee_07.png` which should give us: `d:ctf{part-four-now-recovered}`
