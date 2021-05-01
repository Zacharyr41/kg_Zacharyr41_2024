

var x = 11;
var y = 2;
var z = 1000;

console.log("Expected: 2");
console.log(getNumDigits(x));
console.log("Expected: 1");
console.log(getNumDigits(y));
console.log("Expected: 4");
console.log(getNumDigits(z));

function intsToStrings(arr){
    var result = new Array(arr.length);
    var s;
    var j = 1;
    for (var i = 0; i < arr.length; i++){
        while (arr[i] / j >= 1){

        }
    }
    return 1;
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

function getDigit(num, digitNumber){
    
}
