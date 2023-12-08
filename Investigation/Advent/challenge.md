As Christmas draws closer, it becomes increasingly tempting to sneak a peek at the gifts under the tree.

Are you patient enough to wait until the 24th, or will you shake the presents to find this year's flag?

Hint 1. How can you convince the program it's Christmas? How does it check what time it is?

Hint 2. Uncovering the flag might require interacting with the program as it's running - IDA Free and Ghidra both offer debugger support, and also provide a handy decompiler.

Hint 3. The surprise quiz is not handled directly in the application itself, but the interpreter needs some way to get at it. You don't have to try deciphering the quiz script yourself - can you intercept the output of `unscramble_program` somehow? Where is its output stored?

Hint 5. IDA and most other debuggers will let you examine memory contents of the running program if you set a breakpoint after `unscramble_program`.