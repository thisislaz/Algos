/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
*/

const keys1 = ["flavor", "size", "is_delicious"];
const vals1 = ["chocolate", 10, true];
const expectedA = {
    flavor: 'chocolate',
    size: 10,
    is_delicious: true,
};

const keys2 = [];
const vals2 = [];
const expectedB = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals3 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expectedC = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}


    function zipArraysIntoMap(keys, values) {
        if (keys.length !== values.length) return false
        let map = {}
        for (let i = 0; i < keys.length; i++) {
            map[keys[i]] = values[i]
        }
        return map
    }




/*

function zipArraysIntoMap(keys, values) {
    //Your code here
  if(keys.length !== values.length){
    return false
  }
  let dict={}
  for(let i=0; i<keys.length;i++){
    dict[keys[i]]=values[i]
  }
  return dict
}

*/



console.log(zipArraysIntoMap(keys1, vals1)) // expected: { flavor: 'chocolate', size: 10, is_delicious: true } (order may vary)
console.log(zipArraysIntoMap(keys2, vals2)) // expected: {} 
console.log(zipArraysIntoMap(keys3, vals3)) // expected: { name: 'Gyarados', number: 130, type: 'water/flying', evolves_from: 'Magikarp' } (order may vary)