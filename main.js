var numbers = process.argv.slice(2);
const DIGIT_MULTIPLIER = 10;
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
            s = digitToString(currentDigit) + s;
            entry /= DIGIT_MULTIPLIER;
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

