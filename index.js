
let num1 = 10;
let num2 = 10;

if (num1 < num2) {
    console.log("num1 is less than num2");
} else if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is equal to num2");
}

let string1 = "apple";
let string2 = "banana";

if (string1 < string2) {
    console.log("string1 comes before string2");
} else if (string1 > string2) {
    console.log("string1 comes after string2");
} else 
    console.log("string1 is equal to string2");
let friendName = "Uma";
let friendMood = "happy";

if (friendMood === "happy") {
    console.log(`${friendName} is in a good mood.`);
} else if (friendMood === "sad") {
    console.log(`${friendName} seems to be feeling down.`);
} else {
    console.log(`${friendName} is feeling neutral.`);
}

switch (friendMood) {
    case "happy":
        console.log(`${friendName} is in a good mood.`);
        break;
    case "sad":
        console.log(`${friendName} seems to be feeling down.`);
        break;
    default:
        console.log(`${friendName} is feeling neutral.`);
        break;
}
