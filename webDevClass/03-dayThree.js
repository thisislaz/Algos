var favFoods = ["Calamari", "Pho", "Pizza", "Sushi", "Medium-rare steak", "Tacos","Korean BBQ", "Chipotle"]; //elements are teh values in the array (calamari, pho, etc.;)

//print eacdh and every value in this array
for (var i=0;i<favFoods.length;i++){
    if(favFoods[i]==="Sushi"){
        console.log("Inflation doen for "+ favFoods[i])
    }
    else if(favFoods[i]==="Chipotle"){
        console.log("You got your bang for your buck at "+ favFoods[i])
    }
    else{
        console.log(favFoods[i])
    }
}

var countPositives = 0;
var numbers = [ 3,4,-2,7,16,-8,0];

for(var i=0;i<numbers.length;i++){
    if(numbers[i]>0){
        countPositives+=1
    }
}

console.log('there are '+countPositives+' positive values') 