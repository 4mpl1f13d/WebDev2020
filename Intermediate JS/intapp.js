// -- 9.1 Random number generator 0-0.99
    // var n = Math.random(n);
    // console.log("Random... " +n);
    // // set parameters to which number we need +1 to account for 0 index
    // n=(n*6)+1;
    // console.log("Random*6+1... " +n);
    // // Two a whole number
    // n = Math.floor(n);
    // console.log("Value floored..." +n);


// -- 9.2 Love calculator
    // prompt("What is name #1?");
    // prompt("What is name #2?");
    // var loveScore = Math.floor(Math.random() * 100) + 1;
    // console.log("Your Love Score is " +loveScore);

// -- 9.3 If else conditional statements
    // if (condition) {

    // } else {

    // }

// -- 9.4 If else conditional statements using love calculator
        // prompt("What is name #1?");
        // prompt("What is name #2?");
        // var loveScore = Math.floor(Math.random() * 100) + 1;
        // if (loveScore > 70) {
        //     console.log("You love each other like Kanye loves himself! ") 
        // } else {
        //     console.log("Your Love Score is " +loveScore+ "%");
        // }

// -- 9.5 Comparators and equality
        // === is equal to and data types match
        // == is equal to does not check if  data types match
        // !== is not equal to 
        //  > is greater than
        //  < is lesser than
        //  >= is greater or equal than
        //  <= is lesser or equal than
        // && AND
        // || OR
        // ! NOT


// -- 9.6 combining comparators using love calculator
        // prompt("What is name #1?");
        // prompt("What is name #2?");
        // var loveScore = Math.floor(Math.random() * 100) + 1;
        // if (loveScore > 70) {
        //     console.log("Your Love Score is " +loveScore+ "%. You love each other like Kanye loves himself! ") 
        // } if (loveScore >30 && loveScore <= 70) {
        //     console.log("Your Love Score is " +loveScore+ "%. Decent Match... Good luck!"); 
        // } if (loveScore <= 30 ){
        //     console.log("Your Love Score is " +loveScore+ "%. You go together like oil and water");
        // }


// -- 9.7 Collections using JS Arrays
        // var guestList=[ "Angela", "Jack", "Pan", "James", "Lara", "Jason"];
        // console.log(guestList);

        // // console.log(guestList.length);
        // // console.log(guestList[0]);
        // // console.log(guestList.includes("Jack"));

        // var guestName = prompt("Who is the person you are seeking?");

        // if (guestList.includes(guestName)){
        //     console.log("Welcome " +guestName+ "!")
        // } else {
        //     console.log(guestName+ " is not here right now, maybe next time...")
        // }

 // -- 9.8 Elements and Intermediate JS Array techniques
        // var output=[];
        // // .push pushes item to the end of the array
        // output.push(1);
        // // .pop pops the item at the end of the array
        // output.pop(1);

// -- 9.8 FizzBuzz Elements and Intermediate JS Array techniques
        // var output = [];
        // var count = 1;
        // function FizzBuzz() {
        //         if (count % 15 == 0) {
        //             output.push("FizzBuzz");
        //         } else if (count % 3 == 0) {
        //             output.push("Fizz");
        //         } else if (count % 5 == 0) {
        //             output.push("Buzz");
        //         } else {
        //             output.push(count);
        //         }
        //         console.log(output);
        //         count++;
        //     }

// -- 9.10 Control Statements using While (state) loops
        // var i = 1;
        // while (i < 2) {
        //     console.log(i);
        //     i++;            
        // }

// -- 9.11 FizzBuzz updated using While loops
        // var output = [];
        // var count = 1;
        // function FizzBuzz() {
        //     while (count <= 100) {
        //         if (count % 15 == 0) {
        //             output.push("FizzBuzz");
        //         } else if (count % 3 == 0) {
        //             output.push("Fizz");
        //         } else if (count % 5 == 0) {
        //             output.push("Buzz");
        //         } else {
        //             output.push(count);
        //         }
        //         console.log(output);
        //         count++;
        //     }
        // }

// -- 9.12  99 Bottles of Beer using While loops
        var count = 100;
        function BottlesOfBeer() { 
            while (count <= 100) {
                count--;
                if (count < 100){
                    console.log(+count+ " bottles of beer on the wall, " +count+  " bottles of beer. Take 1 down pass it around, " +(count-1)+ " bottles of beer on the wall.");
                } else if (count === 1) {
                        console.log(count+ " bottle of beer on the wall, " +count+  " bottle of beer. Take 1 down pass it around, " +(count--)+ " bottles of beer on the wall.");
                } else {
                        console.log("No bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
                }                
            
            }
            
        }

// -- 9.13  Control Statements and For loops
        // for (const i = 0, length = iterable.length; i < length; i += 1) {
        //     const element = iterable[i];
        //             }

// -- 9.14 FizzBuzz with for loop
        // for (var i=1; i < 101; i++){
        //     if (i % 15 == 0) console.log("FizzBuzz");
        //     else if (i % 3 == 0) console.log("Fizz");
        //     else if (i % 5 == 0) console.log("Buzz");
        //     else console.log(i);
        // }

// -- 9.15 Control Statements and For loops
        for (let i = 0; i < 100; i++) {
            console.log(+i+ " bottles of beer on the wall, " +i+  " bottles of beer. Take 1 down pass it around, " +(i-1)+ " bottles of beer on the wall.");
            if (i === 1) {
                console.log(i+ " bottle of beer on the wall, " +i+  " bottle of beer. Take 1 down pass it around, " +(i--)+ " bottles of beer on the wall.");
            } else {
                console.log("No bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
            } 
            
        }

