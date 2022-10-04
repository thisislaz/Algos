/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4bbcd3";
  const expected1b = "a4b2cd3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  const str5 = "abbbbbbbbbbbbbbbbb"
  const expected5 = "ab17"
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  
  
function encodeStr(str){
    // your code here
    function encodeStr(str) {
      let encoded = "";
  
      for (let i = 0; i < str.length; i++) {
          let currChar = str[i];
          let dupeCount = 1;
  
          while (str[i + 1] === currChar) {
              dupeCount++;
              i++;
          }
  
          if (dupeCount === 1) {
              encoded += currChar
          }
          else if (dupeCount === 2) {
              encoded += currChar + currChar
          }
          else {
              encoded += currChar + dupeCount;
          }
      }
      return encoded;
  }
} 



console.log(encodeStr(str1)) // Expected: a4bbcd3
console.log(encodeStr(str2)) // Expected: ""
console.log(encodeStr(str3)) // Expected: a
console.log(encodeStr(str4)) // Expected: bbcc
console.log(encodeStr(str5)) // Expected: ab17