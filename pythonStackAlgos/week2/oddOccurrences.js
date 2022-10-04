/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const numsA = [1];
const expectedA = 1;

const numsB = [5, 4, 5];
const expectedB = 4;

const numsC = [5, 4, 3, 4, 3, 4, 5];
const expectedC = 4; // there is a pair of 4s but one 4 has no pair.

const numsD = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedD = 1;

function oddOccurrencesInArray(nums) {
    //Your code here
    let freq = makeFrequencyTable(nums);
    for (let key in freq){
        if (freq[key] % 2 !== 0){
            return parseInt(key);
        }
    }
    return false;
}

/* students response

function oddOccurrencesInArray(nums) {
    // Initialize frequency table object
    let object = makeFrequencyTable(nums);
    // Iterate through frequency table
    for (var key in object) {
        // Check if value is odd number
        if (object[key] % 2 != 0) {
            // Return key
            return key;
        }
    }
}

*/
console.log(oddOccurrencesInArray(numsA), "should equal", expectedA);
console.log(oddOccurrencesInArray(numsB), "should equal", expectedB);
console.log(oddOccurrencesInArray(numsC), "should equal", expectedC);
console.log(oddOccurrencesInArray(numsD), "should equal", expectedD);