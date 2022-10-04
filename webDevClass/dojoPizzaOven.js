// function pizzaOven(crustType, sauceType,cheese,toppings){
//     var pizza = {}
//         pizza.crustType = crustType;
//         pizza.sauceType = sauceType;
//         pizza.cheese = cheese;
//         pizza.toppings = toppings;
//     return pizza;
// }

// console.log(pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']))

// var meatLovers = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
// console.log(meatLovers)

// var veggieLovers = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
// console.log(veggieLovers)

// var margarita = pizzaOven('flatbread', "tomatoe suace", 'fresh mozz', ['sliced tomatoe', 'spinach']);
// console.log(margarita)

// var fishyBusniess = pizzaOven('cheese filled', 'mariana', 'mozz', ['tuna', 'clams'])
// console.log(fishyBusniess )

function randomPizza(crustType, sauceType,cheese,toppings){
var crustType = ['handtossed', 'brooklyn', 'stuffed', 'cheesy'];
var sauceType = ['marinara', 'alfredo', 'none'];
var cheese = ['mozz', 'provolone', 'feta', 'double', 'none'];
var toppings = ['spinach', 'olives', 'tomatoes', 'shrooms', 'onions', 'pineapple']
    var pizza = {}
        pizza.crustType = Math.random()*crustType;
        pizza.sauceType = Math.random()*sauceType;
        pizza.cheese = Math.random()*cheese;
        pizza.toppings = Math.random()*toppings;
    
        return pizza
}
console.log(randomPizza)