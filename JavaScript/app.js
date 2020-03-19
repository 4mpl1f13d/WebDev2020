// -- 1. String.length and Concatenation practice
// Create a tweet and count the characters remaining
// var tweet = prompt ("Please enter your message... ");
// var remainingCharacters = (280 - tweet.length); 
// alert("You have written " +tweet.length+ " characters. You have " +(280 - tweet.length)+ " characters remaining.");


// -- 2.1 Slicing parts of a string
// var name="Jeremy";
// will remove the first character
// alert(name.slice(0,1));
// will all but the last character
// console.log(name.slice(1,6));

// -- 2.2 Slicing parts of a string applied to tweet
// Create a tweet, count the characters remaining and slice the remaining characters past 140

// var tweet = prompt ("Please enter your message... ");
// console.log("You have written " +tweet.length+ " characters.");
// console.log("Heres your original tweet: " +tweet+ ".");
// console.log("Cutting your tweet down to... " +tweet.slice(0,140)+ " ...");

//Text used (152) - Sunt maxime assumenda placeat et ea rerum tempore dolorem. Sed cupiditate eaque vel cum iusto ad. Nulla architecto expedita in quia illum repellat quod.

// Teachers example for on the fly via  a 1 liner
// alert(prompt("Please enter your tweet: ").slice(0,140));


// -- 3.1 Changing case of a string
// var name ="Jeremy"
// console.log( name.toUpperCase());
// console.log( name.toLowerCase());


// -- 3.2 Changing case of a string
// Create prompt for the name lower case, send alert Hello, name with proper casing for the name

// var name = prompt("What is your name (lower case only)?").toLowerCase();
// // console.log(name);
// var firstLetter = name.slice(0,1);
// var capFirstLetter = firstLetter.toUpperCase();
// var remainingName = name.slice(1,name.length);
// var capitalizedFirstName = capFirstLetter + remainingName;
// console.log("Your proper capitalized name is: "+capitalizedFirstName+ "."); 
// alert("Hello " + capitalizedFirstName);


// -- 3.3 Arithmetic and Modulo
// var test=12%8;
// console.log(test);

// -- 3.4 Dog Age -> Human age calculator
// dogAge=prompt("What is the age of the dog?");
// humanAge=((dogAge -2) * 4 )+ 21;
// alert("The Human Age of the dog is: " +humanAge+ " years old!");

// -- 3.5 Increment and Decrement Expressions
// var x=5;
// Increment statement
// x++; 
// Decrement statement
// x--;
// x=x+2 , yields 7
// x=+2; 
// works with += , -= , *=  , /= 


// -- 3.6 Functions
// function name(params) {
//     code to be executed
// }


// -- 3.7 karel the robot @ http://stanford.edu/~cpiech/karel/ide.html 5X5 move to top Left corner
// function main(){
//     goToTopLeft();
//  }
 
//  function goToTopLeft(){
//     moveFourTimes();
//     turnLeft();
//     moveFourTimes();
// }

// function moveFourTimes() { 
//     move();
//     move();
//     move();
//     move();
// }


// -- 3.8 karel the robot @ http://stanford.edu/~cpiech/karel/ide.html 5X5  drop beepers from bottom right to top Left corner
// function main(){
//     dropBeeper();
//         dropBeeper();
//             dropBeeper();
//                 dropBeeper();
//                      dropBeeper();
                    
//  }
 
//  function dropBeeper(){
//     putBeeper();
//     move();
//     turnLeft();
//     move();
//     turnRight();
//    }


// -- 3.9 karel the robot @ http://stanford.edu/~cpiech/karel/ide.html 5X5  drop beepers from bottom right to top Left corner in a chess board pattern
// function main(){
//     dropBeeperOdd();
//     dropBeeperEven();
//     dropBeeperOdd();
//     dropBeeperEven();
//     dropBeeperOdd();
        
//  }
 
//  function dropBeeperOdd(){
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
// }
   
// function dropBeeperEven(){
//     move();
//     turnLeft();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnRight();
//     move();
//     turnRight();
// }

// -- 3.9 Functions parameters and arguments\
// function getMilk(money) { 
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     //round down using math.floor function
//        var milkMoney = Math.floor(money /1.5);
//     console.log(milkMoney);

//     console.log("buy" +milkMoney+ " bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     } 

//     call function to execute processes
//     getMilk(5);
    

// -- 3.9 Functions Outputs and Returns
// function getMilk(money, costPerBottle) { 
//     console.log("Going to the store... ")
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");   
//     console.log("moveRight");
     
//     // Update to return value of function
//     console.log("buy " +calcBottles(money, costPerBottle)+ " bottles of milk");
 
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");

    
//     return calcChange(money, costPerBottle);
//     }

//     function calcBottles(startingMoney, costPerBottle ){
//         //round down using math.floor function
//         var numberOfBottles = Math.floor(startingMoney/costPerBottle);
//         return numberOfBottles;
//     }

//     function calcChange(startingAmount, costPerBottle) {
//         // Modulo operator in use for remainder
//         var change = startingAmount % costPerBottle;
//         return change;
//     }

//  // call function to execute processes
//   console.log("Hello master, here is your $"  +getMilk(10, 3)+ " change.");
  

// -- 3.10 BMI Function using Outputs and Returns
// If my weight is 65Kg and my height is 1.8m
// BMI should equal around 20 in this case.

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}

console.log(bmiCalculator(65, 1.8));