let firstString = ("Uwielbiam JavaScript");
let secondString = ("Jestem świetnym programistą");

function longerString (string1, string2) {
    if (string1.length > string2.length) {
        return ("Longer string is \"" + string1 + "\"");
    } else if (string1.length < string2.length) {
        return ("Longer string is \"" + string2 + "\"");
    } else {
        return ("Strings are even");
    }
}

console.log("Lenght of string: \"" + firstString + "\" = " + firstString.length)
console.log("Lenght of string: \"" + secondString + "\" = " + secondString.length)
console.log(longerString(firstString, secondString));
