var numbers = process.argv.slice(2);
console.log('The Array: ', numbers);
const DIGIT_MULTIPLIER = 10;
var functionResult = intsToStrings(numbers);
console.log("The Result: ", functionResult);


function intsToStrings(arr){
    var result = new Array(arr.length);
    var s;
    var j;
    var entry;
    var currentDigit;

    for (var i = 0; i < arr.length; i++){
        s = "";
        j = 1;
        entry = arr[i];
        do {
            currentDigit = Math.floor(entry) % Math.pow(DIGIT_MULTIPLIER, j); 
            console.log("Current Digit: ", currentDigit);
            s = digitToString(currentDigit) + s;
            
            j++;
            entry /= 10;
        } while (entry >= 1);
        
        result[i] = s;

    }
    return result;
}
/*
    getNumDigis: Calculates number of digits in an int
*/
function getNumDigits(num){
    var digits = 0; 
    var multiplier = 1; 
    while (num / multiplier >= 1){
        ++digits;
        multiplier *= 10;
    }
    return digits;
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
/*
    Returns the kth digit of some integer.
    Digit in the ones place is the "1st" integer
*/
function getDigit(number, k){
    return number % Math.pow(10, k);
}