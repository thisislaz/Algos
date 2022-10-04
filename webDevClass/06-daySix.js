console.log(3.4)
console.log(Math.floor(3.9))//math.floor rounds down
console.log(Math.ceil(3.1))//rounds up

console.log(Math.random()*20)//gives us a random number, between 0 to 1, between 1-20 multiply 20; wont include 20
console.log((Math.random()*30)+10)//gives a random number between 10-40 including decimals


//math.floor gives you 0 but math.ceil wont becasue 0.1 gets rounded up to 1
console.log(Math.floor(Math.random()*21))//add one to the last nubmer youn want to be random

var lifesAnswers = [
    "It is certain.", //0
    "It is decidedly so.",//1
    "Without a doubt.",//2
    "Yes – definitely.",//3
    "You may rely on it.",//3
    "As I see it, yes.",//4
    "Most likely.",//5
    "Outlook good.",//6
    "Yes.",//7
    "Signs point to yes.",//8
    "Reply hazy, try again.",//9
    "Ask again later.",//10
    "Better not tell you now.",//11
    "Cannot predict now.",//12
    "Concentrate and ask again.",//13
    "Don't count on it.",//14
    "My reply is no.",//15
    "My sources say no.",//16
    "Outlook not so good.",//17
    "Very doubtful."//18
];

function magic8Ball(){
    console.log("Seeking ansawers from the HOLY one...please wait.")
    let randomIndex = Math.floor(Math.random()*lifesAnswers.length);
    console.log(lifesAnswers[randomIndex]);

}
magic8Ball();