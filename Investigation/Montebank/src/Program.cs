var key = "packmyboxwithfivedozenliterjugs{:}-";
Console.Write("Enter flag: ");
var input = Console.ReadLine();
if (input == null || input.Length < 23) {
    Console.WriteLine("Incorrect.");
    Console.ReadLine();
    return;
}
if (
    input[0] == key[17] &&
    input[19] == key[21] &&
    input[4] == key[13] &&
    input[20] == key[24] &&
    input[2] == key[2] &&
    input[3] == key[24] &&
    input[1] == key[32] &&
    input[12] == key[2] &&
    input[15] == key[26] &&
    input[5] == key[31] &&
    input[11] == key[34] &&
    input[7] == key[12] &&
    input[17] == key[4] &&
    input[8] == key[26] &&
    input[13] == key[12] &&
    input[21] == key[25] &&
    input[10] == key[25] &&
    input[6] == key[24] &&
    input[9] == key[25] &&
    input[14] == key[1] &&
    input[16] == key[34] &&
    input[18] == key[18] &&
    input[22] == key[33]
) {
    Console.WriteLine("Correct! The flag is " + input);
    Console.ReadLine();
} else {
    Console.WriteLine("Incorrect.");
    Console.ReadLine();
    return;
}