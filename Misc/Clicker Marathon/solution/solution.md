To avoid carpal tunnel, you may want to automate the task of clicking the links.

The next link is always in the `<a>` element with the ID `walk-button`, which you can retrieve with an HTML parser like HTML Agility Pack in C# or Requests in Python. Then, set up a script to visit each link in order, as in the suggested solution [walk.py](walk.py).

Remember to add a case to stop at the final document, where the flag `d:ctf{i-am-in-the-turbo-team}` is shown.