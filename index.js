/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;
if(votingAge > 18){
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let taskb1 = 'change me';
let taskb2 = 'im gonna change you';
if (taskb2 === 'im gonna change you'){
    taskb1 = "i've been changed";
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let taskC1 = '1999'
let taskC2 = parseInt(taskC1, 10)



//Task d: Write a function to multiply a*b 

const multipliedTogether = (a, b) => a*b;



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const dogYears = (age) => age * 7;



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
 function dogFeeder(weight, age){
    if (age >= 1){
        if (weight <= 5){
            return "feed your dog " + (weight * .05) + ' pounds of raw food per day'; 
        }
        if (weight <= 10){
            return "feed your dog " + (weight * .04) + ' pounds of raw food per day';
        }
        if (weight <=15){
            return "feed your dog " + (weight * .03) + ' pounds of raw food per day';
        }
        if (weight > 15){
            return "feed your dog " +  (weight * .02) + ' pounds of raw food per day';
        }
    }
    if (age < 1){
        if (age < .4){
            return "feed your dog " +  (weight * .1) + ' pounds of raw food per day';
        }
        if (age < .7){
            return "feed your dog " + (weight * .05) + ' pounds of raw food per day';
        }
        if (age >= .7){
            return "feed your dog " + (weight * .04) + ' pounds of raw food per day';
        }
    } 
 }



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors(playersChoice) {
  let computersChoice = Math.random();
  console.log(computersChoice);
    if (computersChoice < .34){
        computersChoice = 'rock';
    } else if (computersChoice < .67){
        computersChoice = 'paper';
    } else {
        computersChoice = "scissors";
    }
    console.log('Your choice is ' + playersChoice)
    console.log( 'The computers choice is ' + computersChoice)
    //player chooses rock
    if (playersChoice === 'rock' && computersChoice === 'rock'){
         return 'TIE';
    }
      if (playersChoice === 'rock' && computersChoice ==='paper'){
        return 'PAPER BEATS ROCK';
    }
    if (playersChoice === 'rock' && computersChoice === 'scissors'){
        return 'ROCK BEATS SCISSORS';
    }
      //player chooses paper
      else if (playersChoice === 'paper' && computersChoice === 'rock'){
        return "PAPER BEATS ROCK";
    }
     else if (playersChoice === 'paper' && computersChoice === 'paper'){
        return "TIE";
    }
     else  if (playersChoice === 'paper' && computersChoice === 'scissors'){
        return "SCISSORS BEATS PAPER";
    }
    //player chooses scissors
     else if (playersChoice === 'scissors' && computersChoice === 'rock'){
        return "ROCK BEATS SCISSORS";
    }
      else  if (playersChoice === 'scissors' && computersChoice ===  'paper'){
        return 'SCISSORS BEATS PAPER';
    }
      else if (playersChoice === 'scissors' && computersChoice === 'scissors'){
        return 'TIE'
    }
    
}
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kmToMiles = (kilometers) => kilometers * 0.62137;



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

const feetToCM = (feet) => feet / 0.032808;


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(numberOfBottles){
    for(let i = numberOfBottles; i >=1 ; i--){
        if(i === 0 ){
            console.log('you are out of soda =[ ')
        }
        else {
              console.log(i + ' bottles of soda on the wall ' + i + ' bottles of soda, take one down pass it around ' + (i - 1) +' bottles of soda on the wall');
        }
  
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function reportCard(percentage){
    if (percentage >= 90){
        return "Congrats! You've gotten an A!";
    }
     else if (percentage >= 80){
        return "Good job on receiving a B!";
    }
     else if (percentage >= 70){
         return "You got a C";
     }
     else if (percentage >= 60){
         return 'You got a D';
     }
     else {
         return 'F is for failure';
     }
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





