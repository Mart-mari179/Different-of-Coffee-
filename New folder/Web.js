alert("I am link");

function AskQuestions(){
   var Question = document.getElementById("Question");   
   Question.innerHTML = "What is your favourite coffee ?";
}

function AskQuestions(){
   var Question = document.getElementById("Question2");   
   Question.innerHTML = "Coffee beans grow on ?";
}

function AskQuestions(){
   var Question = document.getElementById("Question3");   
   Question.innerHTML = "An Americano is a ?";
}

function AskQuestions(){
   var Question = document.getElementById("Question4");   
   Question.innerHTML = "What's the first thing you do when you see a coffee shop ?";
}

function AskQuestions(){
   var Question = document.getElementById("Question5");   
   Question.innerHTML = "How mutch coffee do you drink a day ?";
}

function AskQuestions(){
   var Question = document.getElementById("Question6");   
   Question.innerHTML = "What's the most common way to say I need a coffee in the morning?";
}

function AskQuestions(){
   var Question = document.getElementById("Question7");   
   Question.innerHTML = "When do you drink coffee?";
}

function AskQuestions(){
   var Question = document.getElementById("Question8");   
   Question.innerHTML = "Do you like other foods or drinks when they are coffee flavored? ";
}

function AskQuestions(){
   var Question = document.getElementById("Question9");   
   Question.innerHTML = "What food goes well with coffee?";
}

function AskQuestions(){
   var Question = document.getElementById("Question10");   
   Question.innerHTML = "Do you have a favorite coffee mug?";
}


AskQuestions();

if (score>=50) {
document.writeln("You passed!");
} else{
    document.writeln("You faul!");
}


let CoffeName = "Latte";
let Coffeeprice = "30";
let Coffeeroast = "Medium";


let Coffeename = "Cuppuccino";
let Price = "40";
let Roast = "Medium";


let Name = "Mocha";
let Theprice = "20";
let Coffeesize = "Medium";

let Coffee = "Espresso";
let APrice = "50";
let Size = "Medium";

let coffeeName = "Americano";
let CoffeePrice = "60";
let CoffeeRoast = "Medium";

let CoffeeName = "Americano";
let Cost = "70";
let Kind = "Medium";

let coffeeInfoDiv = document.getElementById("coffee-info");


let userInput="I want strong coffee.";
if (userInput.includes("strong")) {
  console.log("you might like a Espresso");
} else if (userInput.includes("milk")) {
  console.log("you might like a Latte");
} else if (userInput.includes("flat")) {
  console.log("you might like a Flat White");
} else if (userInput.includes("foam")) {
  console.log("you might like a Macchiato");
} else {
  console.log("Sorry, I'm not sure what type of coffee you might like.");
}


