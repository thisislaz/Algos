// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
  // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
  //first go through the searchObj, returns the keys as arrays;
  //loop through the items, in each element(inner loop), we will create condition if element.keys[index] !== searchObj.keys[index]; we wanna break the loop;
  //if all element.key[index] == searchObj.keys[index] ; push the element into the result array;
  //if not; do nothing;
  //after the loop; return the result array;
  const result = [];      
  const objKeys = Object.keys(searchObj);     //['age','firstName']
  // const objValues = Object.values(searchObj);

  for ( let obj of items ){
      for( let indx in objKeys ){
          // if( obj[objKeys[indx]] !== objValues[indx]){
          if( obj[objKeys[indx]] !== searchObj[objKeys[indx]]){
              break;
          }
          if( indx == objKeys.length-1 ){
              result.push(obj)
          }
      }
  }
  console.log(result)
  return result;
}

// function findObjectsFilter(searchObj, items) {
//   let searchObjKeys = Object.keys(searchObj);//array to hold searchObj keys
//   let returnArray = [];//array to hold any object that has the same key value pairs as searchObj
//   for(item of items){//loop through items
//       let matches = true;
//       let i = 0;
//       while(matches == true && i < searchObjKeys.length){//while loop with its escape condition being matches = false and loop to go through all the keys in the searchObj keys array
//           if(item[searchObjKeys[i]] != searchObj[searchObjKeys[i]]){//check itemObj[key] is the same as searchObj[key]
//               matches = false;
//           }i++
//       }
//       if (matches){ //if they are the same, push item to the return array. 
//           returnArray.push(item);
//       } 
//   }
//   return returnArray;
// }

findObjectsFilter(searchFor1, items)