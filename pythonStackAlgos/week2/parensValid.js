/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // ( () () )
const expected1 = true;

const str2 = "N(0(p)3"; // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
 function bracesValid(str = "") {
    const stack = [];
    const closeToOpen = { ")": "(", "}": "{", "]": "[" };
  
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "(":
        case "{":
        case "[":
          stack.push(str[i]);
          break;
        case ")":
        case "}":
        case "]":
          if (closeToOpen[str[i]] === stack[stack.length - 1]) {
            stack.pop();
          } else {
            return false;
          }
          break;
        default:
          break;
      }
    }
    return stack.length === 0;
  }


function parensValid(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if(count < 0){
            return false;
        }
            if(str[i] =="(")
            count++;
            if(str[i] == ")")
            count--;

    }
    if (count == 0){
    return true;
    }
    else
    return false;

}

function parensValid(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if(count < 0){
            return false;
        }
            if(str[i] =="(")
            count++;
            if(str[i] == ")")
            count--;

    }
    if (count == 0){
    return true;
    }
    else
    return false;

}
console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false