var firstLetter = "A"; // The First Letter which is FIXED
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // Array of letters for randomization
var charLength = [4,5]; // The number of characters in the name.
var names = 100; // Prints 100 names, change this to change the number of names to be printed. USE Infinity for infinite ;-;
var name = `${firstLetter}`; // Defining a name variable

var getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]; // Used to get a random result from an array
}

var chars = getRandom(charLength); // Get the number of chars in the word

for(i=1;i<=names;i++) {
    for(j=1;j<=chars;j++) {
        var letter = getRandom(letterArray);
        name = `${name}${letter}`;
    }
    console.log(name); // Print the name
    name = `${firstLetter}`; // empties the variable
}
