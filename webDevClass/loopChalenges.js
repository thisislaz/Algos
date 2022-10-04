//print 1-20
for(var i=0;i<=20;i++){
    console.log(i)
}

//decreasing multiples of 3
for (var i=100;i>=0;i--){
    if (i % 3==0){
        console.log(i);
    }
}

//print the sequence
var seq= [4,2.5,1,-0.5,-2,-3.5]
for (var i=0;i<seq.length;i++){
    console.log(seq[i]);
}

//sigma
var sum = 0;
for(var i=0;i<=100;i++){
    sum+=i;
}
console.log(sum)

//factorial
var product = 1;
for(var i =1;i<=12;i++){
    product*=i;
}
console.log(product);