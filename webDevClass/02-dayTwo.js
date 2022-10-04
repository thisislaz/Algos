// var amazingShow1 = "Curb your enthusiasm is #1! yay :)"; //this is a variable that is equal to a string
// var magicsNumber = 32;//32 is a number

// amazingShow1 = "The office";//this is an example of reassigning the variable amazingShow1 to be equal to "The office"

// var isRobSpeakingFactsAboutBasketball = false;//Booleans are another date type: true or false

// //a data type is a simple piece of info such as a string, number, boolean
// //a data structure is something that can store multiple date types(arrays, objects(hash maps), trees, linked lists...etc;)

// //an array is a date structure where you group multiple pieces of info together
// //actual values you see in the array are called: ELEMENTS

// var greatestArtists = ["Drake", "J Cole", "Kendrick", "Kanye", "Tupac", "Beyonce", "Taylor Swift","Lupe Fiasco"];//array of strings
// //indexes (positions)    0          1          2         3        4         5             6
// var randomNums = [23,0,77,12,8];//array of numbers
// var mixedArray = ["Potato", 5, false, true, "hello", 9];//array of mixed data types
// console.log("wazzaaaaap")
// console.log(greatestArtists[5]);

// //a loop is used to do something repeatedly
// for (var num=1;num<=100;num++){
//     //this is the body of the for loop
//         console.log(num);
//     }
// console.log("Finished")

// //print from 10 to 1
// for (var num=10;num>=1;num-=2){
//     console.log(num)
// }
// console.log("Blast Off!!")
// //printing individual elements of arrays
// for (var elements=0;elements<greatestArtists.length;elements++){
//     console.log(greatestArtists[elements])
// }

function findMin(arr){
var min= arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
            return min;
    }
    console.log(findMin(3,4,6,7,8,9,0,3,-1))