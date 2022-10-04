/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */

 function generateAnagrams(str, ana = '', newArray = []) {
        
      // could have also written this as: if(!str)....
        if (str === '') {
            newArray.push(ana);
          }
          //recursive call for the length of the anagram.
          for (var i = 0; i < str.length; i++) {
            generateAnagrams(str.slice(0, i) + str.slice(i + 1), ana + str[i], newArray);
            // console.log(ana);
          }
          return newArray;
        }
    
// instructor
// function generateAnagrams(str, anagrams=[], partial="") {
//     if (str.length === 0) anagrams.push(partial)

//     for (let i = 0; i < str.length; i++){
//         const currentLetter = str[i]
//         const beforeLetter = str.slice(0,i)
//         const afterLetter = str.slice(i+1)
//         const remainingStr = beforeLetter + afterLetter
//         const newPartial = partial + currentLetter
//         generateAnagrams(remainingStr, anagrams, newPartial)
//     }
//     return anagrams
// }
console.log(generateAnagrams(str1)) //["ilm", "iml", "lim", "lmi", "mil", "mli"] (order may vary, that's okay)