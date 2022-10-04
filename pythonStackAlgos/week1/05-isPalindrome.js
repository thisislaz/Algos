/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abba"
const expected5 = true;



    function isPalindrome(str) { 
        if (str.length < 2) return true;
        let start = 0;
        let end = str.length - 1;
        while (start < end) {
            if (str[start] !== str[end]) return false;
            start++;
            end--;
        }
        return true;
    }

/*  

function isPalindrome(str) {
    // Initialize variable to represent the "last" character in the string
    var last = str.length-1
    // Loop through half of string
    for (var i = 0; i < str.length / 2; i ++) {
        // Compare characters -> if they don't match return false
        if (str[i] != str[last]) {
            return false;
        }
        // Increment last variable by -1
        last--;
    }
    // If it makes it through the whole loop it must be true 
    return true;
}

*/


console.log(isPalindrome(str1)) //expected: true
console.log(isPalindrome(str2)) //expected: true
console.log(isPalindrome(str3)) //expected: false
console.log(isPalindrome(str4)) //expected: false
console.log(isPalindrome(str5)) //expected: true