/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const two_expected1 = true;

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const two_expected2 = false;

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const two_expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    function isRotation(s1, s2) {
        // Check to see if lengths match
        if (s1.length != s2.length) {
            // If not return false
            return false;
        }
        // Find index for first letter
        let amnt = s2.indexOf(s1[0]);
        // Call reverse string function
        let reversedStr = rotateStr(s1, amnt)
        // Compare the two
        if (s2 == reversedStr) {
            return true;
        }
        else {
            return false;
        }
    }
    
}