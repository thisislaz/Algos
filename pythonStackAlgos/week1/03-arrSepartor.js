/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    //Your code here
}

console.log(join(arr1, separator1)) // Expected: "1, 2, 3"
console.log(join(arr2, separator2)) // Expected: "1-2-3"
console.log(join(arr3, separator3)) // Expected: "1 - 2 - 3"
console.log(join(arr4, separator4)) // Expected: "1"

/*
Answer from instructor
function join(arr, separator) {
    //Your code here
    let joined = "";
    for (let i = 0; i < arr.length; i++) {
        joined += arr[i];
        if (i < arr.length - 1) {
            joined += separator;
        }
    }
    return joined;
}



Answer from student:
function join(arr, separator) {
    var str = "";
    if (arr.length == 1) {
      str += arr[0];
    }
    for (var i = 0; i < arr.length; i++) {
      str += arr[i];
      if (i != arr.length-1)
        str += separator;
    }
    return str;
}

*/