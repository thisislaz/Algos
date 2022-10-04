/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    function reverseWordsSplit(wordsStr) {
        const words = wordsStr.split(" ");
        let wordsReversed = "";
    
        for (const word of words) {
            let reversedWord = "";
    
            for (let i = word.length - 1; i >= 0; --i) {
                reversedWord += word[i];
            }
    
            // add a space in front of word if it's not the first word
            if (wordsReversed.length > 0) {
                reversedWord = " " + reversedWord;
            }
            wordsReversed += reversedWord;
        }
        return wordsReversed;
    }
    
    
    
    function reverseWords(str) {
        let reversed = "";
        let temp = ""
        for (let char of str){
            if (char === " "){
                reversed += temp + " "
                temp = ""
            } else {
                temp = char + temp
            }
        }
        //capture last word
        reversed += temp;
        return reversed
    }
}

console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg