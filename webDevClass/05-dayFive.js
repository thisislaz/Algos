var fruit1 = "apples";
var fruit2 = "oranges";
    
//using temp variable

var temp = fruit2;//saving fruit2 into a temp variable so we dont lose oranges
fruit2 = fruit1;
fruit1=temp;

// console.log(fruit2 + " and " + fruit1);

// destructure swap
[fruit1,fruit2] = [fruit2, fruit1];

[] = [];

// console.log(fruit1)
// console.log(fruit2)

let i=0;
while(i<=12){
    // console.log(i);
    i++;
}

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
// topArtists[3]="Jamie Fox";


let topArtists =["Nipsey Hussle", "Drake", "Lupe", "Ray Charles", "Sam Cooke", "Elvis", "Red Hot Chili Pepeprs"];
//                       0           1       2          3               4         5               6



function reverseArray(arr){
    //left = 0
    var left = 0;
    //right = last index of the array  -----> calculated by doing the array.length -1
    var right= arr.length -1;
    //while left is less than right do this:
    while(left<right){
        //0 swaps with 6
        //1 swaps with 5
        //2 swaps with 4
        // [arr[0],topArtists[6]] = [topArtists[6],topArtists[0]];//swap index 0 with index 6;
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    
    console.log(arr);

}

reverseArray(topArtists);
reverseArray([1,2,3,4,5,6,7,8,9])


