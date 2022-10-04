/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const numA = 5;
const expectedA = 5;

const numB = 10;
const expectedB = 1;

const numC = 25;
const expectedC = 7;

const numD = 999;// 9+9+9 = 27, 2 + 7 = 9
const expectedD = 9;
/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    //Your code here
    //Base case?
    // Logic ?
    // Recursive call / return
}

console.log(sumToOneDigit(numA)) // 5
console.log(sumToOneDigit(numB)) // 1
console.log(sumToOneDigit(numC)) // 7
console.log(sumToOneDigit(numD)) // 9
/*****************************************************************************/

// function sumToOneDigit(num) {
//     //Your code here
//     if (num < 10) return num
//     numStr = num.toString()
//     processedNum = 0
//     for (let i = 0; i<numStr.length;i++){
//         processedNum += parseInt(numStr[i])
//     }
//     return sumToOneDigit(processedNum)
// }

// function sumToOneDigit(num) {
//     // Base case
//     if (num < 10) {
//         return num;
//     }
//     // Turn into a string
//     num = num.toString()
//     sum = 0;
//     // Loop through and add nums
//     for (index of num) {
//         sum += parseInt(index)
//     }
//     // Recursive call
//     return sumToOneDigit(sum);
// }