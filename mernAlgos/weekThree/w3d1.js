/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [
  ["name", "Pizza"],
  ["calories", 9001],
];


const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 13,
};
const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

obj1.__proto__ = obj2;
//   obj1.firstName = 'Jon';

function entries(obj) {
  let returnArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      returnArr.push([key, obj[key]])
    }
  }
  return returnArr
}

console.log(entries(obj1));
console.log(entries(obj2));

// let newArry = [];
// let keys = Object.keys(obj);
// let values = Object.values(obj);

// for (let key in obj) {
//   let newArr2 = [];
//   if (obj.hasOwnProperty(key)) {
//     newArr2.push(key);
//     newArr2.push(obj[key]);
//     newArry.push(newArr2);
//   }
// }
// return newArry;

// }
// console.log(entries(obj1));
// console.log(entries(obj2));

function insert(tableName, columnValuePairs) {
  let keysArr = [];
  let valuesArr = [];
  for (let key in columnValuePairs) {
    keysArr.push(key)
    if (typeof columnValuePairs[key] == "string") {
      valuesArr.push(`'${columnValuePairs[key]}'`)
    } else {
      valuesArr.push(columnValuePairs[key])
    }
  }
  let returnStr = `INSERT INTO ${tableName} (${keysArr}) VALUES (${valuesArr})`
  return returnStr;
}