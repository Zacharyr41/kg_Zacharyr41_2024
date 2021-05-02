
var numbers = process.argv.slice(2);
const DIGIT_MULTIPLIER = 10;
const digitToString = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", 
"Seven", "Eight", "Nine"];
var functionResult = intsToStrings(numbers);
console.log(functionResult.toString());

function intsToStrings(arr){
    var result = new Array(arr.length);
    var currentDigit; //For readability
    for (var i = 0; i < arr.length; i++){
        var s = "";
        var entry = arr[i];
        do {
            currentDigit = Math.floor(entry) % DIGIT_MULTIPLIER; 
            s = digitToString[currentDigit] + s;
            entry /= DIGIT_MULTIPLIER;
        } while (entry >= 1);
        result[i] = s;
    }
    return result;
}
 



