FROM dockcross/linux-x64
RUN mkdir /output/
CMD $CC -std=c99 -O0 /app/advent.c /app/duktape.c -lm -o /output/advent