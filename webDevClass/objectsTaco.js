var taco1 = {
    tortilla: "soft corn tortilla",
    protein: "tinga chicken",
    cheese: 'cotija cheese',
    toppings: ['lettuce', 'pico de gallo', 'guacamole'],
    tacoInfo: function(){ 
        console.log("tortilla options is: " + taco1.tortilla);
        console.log("protein choose is: "+taco1.protein);
        console.log('cheese option is: '+taco1.cheese);
        console.log('toppings options are: '+taco1.toppings)
    }
}
// all the info has been made a call to action since it is inseide a function
taco1.tacoInfo();