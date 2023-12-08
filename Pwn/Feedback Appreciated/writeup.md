The contact form is vulnerable to cross-site scripting, and will render the name and email directly into the DOM.

Giving your name as `<script>document.write(document.cookie);</script>` and checking the support ticket will reveal the flag: `d:ctf{javascript-javascript-everywhere}`