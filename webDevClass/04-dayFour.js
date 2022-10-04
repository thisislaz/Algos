function greetSean(){
    //inside the body of the function
    console.log("hello Sean!")
}
//invoking/calling/executing the function 
// greetSean();

function greetSome(person_name){//person_name is a PARAMETER, it is a placeholder variable for any data that the function needs.
    console.log("Hello "+person_name+"!");
}

// greetSome("Colin");//the info that we fed to the function when we call the function-> this is valled an ARGUEMENT
// greetSome("Lazaro");
// greetSome("Robert");
// greetSome("Sean");


var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX([2,3,4,5,6,7,8,9]);
console.log(x);

function addNums(num1, num2){
    console.log(num1+num2);//console.log just prints something to the console
    return num1 + num2;//return outputs of gives us back some data. function is exited afterwards
}
let newNum = addNums(5,3)+100;

console.log('newNum is this '+newNum)
//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS

function isPal(arr) {//function called isPal which accepts an array as an input
    for(var left=0; left<arr.length/2; left++) {//keep going as long as left is <2.5
        var right = arr.length-1-left;//calculate the opposite index
        if(arr[left] != arr[right]) {//if the values are not equal
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
