/* 
## Q + A
1. How do we assign a value to a variable?
      You assign a value to a variable by using a = also known as an assignment operator.
      For example: let num = 7; 
2. How do we change the value of a variable?
      To change the value of a variable you would use the assignment operator again after using the variables name
      to give it a new value. 
      For example: let num = 7;
                   num = 10; // In this line the value is now changed to 10
3. How do we assign an existing variable to a new variable?
      To assign an existing variable to a new variable make the existing variables name = or assigned to the new
      variables name. 
      For example: let existingVar = 7;
                   let newVar = existingVar; // In this line you are assigning the value of the previous variable 
                   //to the new variable. 
4. Remind me, what are declare, assign, and define?

Declare is to let js know that there is a variable `let a;`
To assign a value to the variable. I need to use `=`.
For example: `let a = 0`

      My A: To "declare" is to create a variable, but not neccessarily have a value yet. Ex: let a;
            To "define" a variable is to give a value to the variable with an "assignment" operator.
            ex. let var = 3;  // The 3 is the value being assigned using "=" to the left variable named "var"


### Research 

5. What is pseudocoding and why should you do it?
      
Pseudocoding is writing code in plain spoken language that humans can understand.

It's important because it allows you to write the logic and steps of the you want to accomplish in code without worrying about the rigid syntax.

Psuedocode allows us to break down problems into solvable peices that can be transfered to code. 

Psudocode is the bridge between our minds and the code.

      My A: Pseudocoding is ploting out the overall structure of the code in plainwords that may not be neccessarily 
      functionally correct code, but can help you map out visually how you want to set up your concepts to run your code.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
      You should spend 90% of the time thinking and 10% of the time actually typing the code. This way you can actually plan
      it out with pseudo code, catch mistakes before they happen, and have an overall structure to how you are going to solve the
      problem.

*/


// STRINGS

firstVariable = "hello world";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "any string";

console.log(firstVariable); //1

const yourName = "Jose";
let hello = `Hello, my name is ${yourName}`
console.log(hello);

//BOOLEANS

const a = 4; 
const b = 53; 
const c = 57; 
const d = 16; 
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false); 
console.log(false && false && false && false && false || true); 
console.log(false === false) 
console.log(e == 'Kevin'); 
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));


//Driver's Ed
let ageOfDriver = 16;

const canTheyDrive = (x) => {
   return x >= 16? "Here are the keys!" : "Sorry, you're too young."
} 

console.log(canTheyDrive(ageOfDriver));



//LOOPS
for(let i=0; i < 10; i++) //right way "let" 
//is included and keeps the loop within the loop
//without affecting the other i's
//for(i=0; i < 10; i++ ) //wrong way 

//The Basics
for(let i=0; i <= 10; i++) {
   console.log (i);
}

for(let i=10; i <= 400; i++) {
   console.log (i);
}

for(let i=12; i <= 4000; i+=3) {
   console.log (i);
}

//Get Even
for (let i = 1; i<= 100; i++) {
   if (i % 2 === 0) {
      console.log( i + "<-- is an even number")
   }
}

//Give Me 5
for (let i = 0; i<= 100; i++) {
   if (i % 5 === 0) {
      console.log("I found a " + i + ". High five!")
   }
   if (i % 3 === 0) {
      console.log("I found a " + i + ". Three is a crowd")
   }
}

//Savings Account
let bank_account = 0;
for(let i = 1; i <=100; i++) {
   bank_account += i;
}

console.log("My bank account this week has " + bank_account + " dollars!");

for(let i = 1; i <=100; i++) {
   bank_account += i * 2;
}

console.log("My bank account for double pay has " + bank_account + " dollars!");

//ARRAYS & CONTROL FLOW
/* A. Talk about it:
   What are the things in an array called?
      The thiings inside an array are called an item or element.

   Do Arrays guarantee those things will be in order?
      Arrays will be in order, unless you make them otherwise. 

   What real-life thing could you model with an array?
      You could array or list out the jewelry in a treasure chest
      with each of it's indexed spot with the first spot being
      index 0.

*/ 

//B. Easy Does It
let quotes = ["What goes up must come down.","To be or not to be.","Life's like a box of chocolates."];

//C. Accessing elements
const randomThings = [ 1, 10, "Hello", true]
console.log(randomThings[0]); //1st element is index 0
randomThings[2] = "World" //String value World put into index 2 of array randomThings
console.log(randomThings); //make sure it updated to world

//D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2]); //Accesses 3rd element [index 2]
ourClass[4] = "Octocat"; //Accesses 5th element [index 4] and assigns "Octocat"
ourClass.push("Cloud City"); //adds Cloud City to end of array using .push 

//E. Mix It Up
const myArray = [5, 10, 500, 20] //array given
myArray.push("Aegon"); //add Aegon to the end using .push
myArray.push("Jeff"); //add your own "" to the end using .push
myArray.shift(); // get rid of 5 at the beginning using .shift
myArray.unshift("Bob Marley"); // Add Bob Marley to beggining using .unshift
myArray.pop(); //gets rid of element at the end using .pop 
myArray.reverse(); //flips the arrays order using .reverse

/*
Did you mutate the array?
I did mutate the array.

What does mutate mean?
Mutate is when you change the original array.

Did the .reverse()method return anything?
It returns the array, but the elements are flipped, so the first is now the last and so on. 
*/ 

//F. Biggie Smalls
let numF = 110; //value of variable = 110

if(numF < 100) {
   console.log("little number"); // under 100 = "little number"
} else {
   console.log("big number"); // else print "big number"
}

//G. Monkey in the Middle
let numG = 7; //value of variable = 7 should print "monkey"

if(numG < 5) {
   console.log("little number"); // under 100 = "little number"
} else if(numG > 10) {
   console.log("big number"); // (else if) print "big number"
} else {
   console.log("monkey"); // else print "monkey"
}

//H. What's in your closet

const kristynCloset = [
   "left shoe",
   "cowboy shoe",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
];


// {
//    "firstName": "John",
//    "lastName": "Smith",
//    "age": 25
// }
//  I'm not sure why the above code is in the read.me?



const thomsCloset = [
   [
      //Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
   ],[
      //Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
   ],[
      //Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
   ]
];

//What's Kristyn wearing today?
console.log("Kristyn is rocking that " + kristynCloset[2] + " today!") //3rd thing in Kristyn's closet
kristynCloset.splice(6, 0, "raybans"); //puts raybans at index 6 using .splice
kristynsCloset[5] = "stained knit hat"; //element 6 or index 5 is now "stained..."

//Thom's array
//3. Thom's outfit
let shirtThom = thomsCloset[0][3]; //the item accessed was Thom's "blue button-up" shirt
let pantsThom = thomsCloset[1][1]; //"jeans"
let accesoryThom = thomsCloset[2][2]; //"raybans"

console.log("Thom is rocking it wearing his " + shirtThom + ", " + pantsThom + ", and " + accesoryThom + " to block out the haters! B)")


thomsCloset[1][2] = "Footie Pajamas";
console.log(thomasCloset[1][2]);




//IV. FUNCTIONS

//A. printGreeting

function printGreeting(name) {
   return "Hello there, " + name + "!";
}

console.log(printGreeting("Jose")); //Plugs my name into the parameter for the greeting.

//B. printCool

function printCool (name) {
   return name + "is cool";
}

console.log(printCool("Jose")); // same as above but now for this phrase

//C. Calculate Cube (volume of cube = a^3)

function calculateCube (num) {
   return num ** 3;
}

console.log(calculateCube(3)); //should be 3^3=27

//D. isVowel

function isVowel (letter) {
   let vowel = ['A','a','E','e','I','i','O','o','U','u'];
   for(let i = 0; i< vowel.length; i++) {
      if (letter === vowel[i]) {
         return true;
      }
   }
   return false;
}

console.log(isVowel("A"));
console.log(isVowel("z"));
console.log(isVowel("u"));

//E. getTwoLengths

function getTwoLengths(str1, str2) {   //string 1 and string 2 set in parameter
   return [str1.length, str2.length];  //sting 1 and string 2 in an array
}

console.log(getTwoLengths("Dapper","Linguistic")); //should be [6,10]


//F. getMultipleLegths

function getMultipleLegths(string) {
   let numberOfLetters = []; // making the array to hold  future string input
   for(let i = 0; i < string.length; i++) {  //for loop to count the string
      numberOfLetters.push(string[i].length); //using .push to push the count of the string to the end of the array
   }
   return numberOfLetters;   //prints the array once all the strings are counted
}

console.log(getMultipleLegths(["Whatsup Doc?","Yes","amazing","cool","Tree"])); //should be [12, 3, 7, 4, 4]



// G. maxOfThree
function maxOfThree (num1,num2,num3) {
   if (num1 > num2 && num1 > num3) {
      console.log(num1 + " is the largest number!")
   } else if(num2 > num1 && num2 > num3) {
      console.log(num2 + " is the largest number!")
   } else{
      console.log(num3 + " is the largest number!")
   }
}
maxOfThree(7,32,3);

// H. printLongestWord
function printLongestWord (Arr) {
   let longestWord = Arr[0];
   for(let i = 1; i <Arr.length; i++) {
      if (longestWord.length < Arr[i].length) {
         longestWord = Arr[i];
      }
   }
   return longestWord;
}

console.log(printLongestWord(["Bojack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//OBJECTS

// A. Make a user object

const user = {
   name: "Cole Coolman",
   email: "coolemail@gmail.com",
   age: 24,
   purchased: []
};

// B. Update the user

user.email = "evenCoolerEmail@gmail.com";
user.age++;

// C. Adding keys and values 

user.location = 'New York';

// D. Shopaholic

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

// E. Object-within-object

user.friend = {
   name: "Lance",
   age: 48,
   location: "Miami",
   purchased: []
}

console.log(user.friend.name);  //2. logs friend's name
console.log(user.friend.location); //3. logs location
user.friend.age = 55; //4. changes age to 55
user.friend.purchased.push("The One Ring"); //4.(Part2) adds "" to end of array
user.friend.purchased.push("A latte"); //5. adds "" to end of array
console.log(user.friend.purchased[1])

// F. Loops

for(let i = 0; i <user.purchased.legth; i++) {     // users purchased array
   console.log (user.purchased[i])                 //logs users purchased array
}
for(let i = 0; i <user.friend.purchased.legth; i++) {   //friends purchased array
   console.log (user.friend.purchased[i])               //logs friends purchased arrays
}

// G. Function can operate on objects

function updateUser () {
   user.age = user.age + 1;
   user.name = user.name[0].toUpperCase;
}

function oldAndLoud () {
   person.age = person.age + 1;
   person.name = person.name[0].toUpperCase;
}

oldAndLoud(user);




// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


