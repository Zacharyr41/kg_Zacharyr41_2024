//var numbers = process.argv.slice(2);
//console.log('The Array: ', numbers);
const DIGIT_MULTIPLIER = 10;
//var functionResult = intsToStrings(numbers);
//console.log(functionResult);


var arrayOne = [3, 25, 209];
var arrayTwo = [10, 300, 5];
var arrayThree = [34, 2, 0];
var arrayFour = [1, 11, 321, 9];
var arrayFive = [1234567890];

console.log("Test Cases");
console.log("Input: ", arrayOne);
console.log("Result: ", intsToStrings(arrayOne));

console.log("Input: ", arrayTwo);
console.log("Result: ", intsToStrings(arrayTwo));

console.log("Input: ", arrayThree);
console.log("Result: ", intsToStrings(arrayThree));

console.log("Input: ", arrayFour);
console.log("Result: ", intsToStrings(arrayFour));

console.log("Input: ", arrayFive);
console.log("Result: ", intsToStrings(arrayFive));

function intsToStrings(arr){
    var result = new Array(arr.length);
    var currentDigit; //For readability
    for (var i = 0; i < arr.length; i++){
        var s = "";
        var entry = arr[i];
        do {
            //console.log("ENTRY: ", entry);
            currentDigit = Math.floor(entry) % DIGIT_MULTIPLIER;
            //console.log("CURRENT DIGIT: ", currentDigit); 
            s = digitToString(currentDigit) + s;
            entry /= 10;
        } while (entry >= 1);
        result[i] = s;
    }
    return result;
}

function digitToString(digit){
    var result;
    switch (digit){
        case 0: 
            result = "Zero";
            break;
        case 1:
            result = "One";
            break;
        case 2:
            result = "Two";
            break;
        case 3:
            result = "Three";
            break;
        case 4:
            result = "Four";
            break;
        case 5:
            result = "Five";
            break;
        case 6:
            result = "Six";
            break;
        case 7:
            result = "Seven";
            break;
        case 8:
            result = "Eight";
            break;
        case 9:
            result = "Nine";
            break;   
    }
    
    return result;
}
