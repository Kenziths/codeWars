

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l+w)
//   };





//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// function reverse(str){
//     return str.split(" ").reverse().join(" ")
//   }






// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (mpg * fuelLeft) >= distanceToPump
//   }








// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

// unction sakuraFall(v) {
//     // your code here
//     let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
//     let time = 0;
    
//     if(v > 0){
//       time = distToGround / v;
//     }
    
//     return time;
//   }


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//const quarterOf = m => Math.ceil(m/3);

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!"
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"}
//     if (p2 === rules[p1]) {
//       return "Player 1 won!"
//     }
//     else {
//       return "Player 2 won!"
//     }
//   }

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function baseCost(days, rate) {
//     return days * rate;
//   }
  
//   function discountRate(days) {
//     if ( days >= 7 ) {
//       return 50;
//     }
//     else if ( days >= 3 ) {
//       return 20;
//     }
//     else {
//       return 0;
//     }
//   }
  
//   function rentalCarCost(days) {
//     return baseCost(days, 40) - discountRate(days);
//   }


// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.


// function describeAge(age) {
//     return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly") 
//   }
  

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// function reverseWords(str){
//     return str.split(" ").reverse().join(" ")
//   }

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.
  
// function booleanToString(b){
//     return b.toString()
//   }

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// function solution(nums){
//     return (nums || []) .sort (function(a , b){
//       return a - b
//     })
//     }