#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <time.h>

#include "duktape.h"

#define MAX_NAME_LENGTH 16
#define PROGRAM_LENGTH 187
const char *SCRAMBLED_PROGRAM = "\x66\x74\x6d\x65\x7e\x66\x7a\x72\x04\x4e\x5f\x27\x2d\x30\x41\x00\xa1\xb9\xd0\xd7\xb4\xc7\xd5\x6c\x0c\x78\x62\x5a\xb4\xff\xa4\x82\x75\x5f\x37\x04\xff\xc6\x80\x7e\x16\x74\xa7\xc9\xfe\x79\x5c\x1c\xed\xbb\x95\x0e\x40\xd4\xa2\x76\x4e\x10\xcc\x9e\x07\x43\xf5\x88\x45\x41\xc5\x8a\x4b\x08\x95\x95\x37\xad\xb3\x18\x0d\xcf\x6f\x23\xc9\x95\x27\xb3\x9b\x6a\xea\x95\x22\xd1\xd2\x3c\xd9\x61\x5c\xb3\x58\xe3\x9a\x25\xce\x72\xe4\x9f\x79\xd4\x54\xbf\x9f\x46\xbd\x2d\xda\x5c\xfc\x69\xe7\x85\x10\xc6\x67\xa8\x6f\xaf\x2a\xb0\x24\xe0\x3b\xe1\x31\xa3\x3e\xba\x27\xb2\x44\xcf\x39\x6d\xae\x6b\xdb\x5d\xbb\x3c\x85\x0a\x61\x87\x5b\xbb\x1e\x25\xe6\x55\xa3\x5f\x31\xd2\x35\x85\xe7\x53\xa8\x5f\x49\xb9\x17\x76\xe7\x1c\x7b\xb3\x0d\x08\xa1\xec\x5a\x9c\x83\x75\x36\xe4\x01\x48\xef";

void unscramble_program(const char *source, char *target, int len, long key) {

    for(int i = 0; i < len; i++) {
        uint8_t offset = (uint8_t)((offset+i) % 256);
        target[i] = source[i] ^ offset;
    }
}

int main(int argc, char *argv[])
{
    time_t t = time(NULL);
    long days_since_epoch = t / (60 * 60 * 24);
    if (days_since_epoch == 19715) {
        printf("It's Christmas!\n");
    } else {
        printf("Be patient, it's not Christmas yet...\n");
        return 0;
    }
	duk_context *ctx = duk_create_heap_default();
    if(!ctx) {
        printf("Couldn't allocate context, someone broke the presents :(\n");
        return 1;
    }
    printf("Unwrapping the presents...");
    char unscrambled_program[PROGRAM_LENGTH];
    unscramble_program(SCRAMBLED_PROGRAM, &unscrambled_program, PROGRAM_LENGTH, days_since_epoch);
    if (duk_pcompile_lstring(ctx, DUK_COMPILE_FUNCTION, unscrambled_program, PROGRAM_LENGTH-1) != 0) {
        printf("Could not unscramble the program. Are you peeking at your presents early?\n");
        return 1;
    } else {
        printf("But first a quiz: what is the name of Santa's forty-second reindeer? ");
        char input[MAX_NAME_LENGTH];
        if (scanf("%15s", input) != 1) {
            printf("ERROR: No answer - you're no fun :(\n");
        }
        duk_push_string(ctx, input);
        duk_call(ctx, 1);
        printf("%s\n", duk_safe_to_string(ctx, -1));
    }
    return 0;
}