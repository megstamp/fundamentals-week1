// I. Variables

// Variables are named "containers" that can hold a value.

const firstName = "Todd";
const schoolAddress = "7035 Beracasa Way, Suite 207, Boca Raton FL 33433";

// These can be used to hold Strings (like above), Numbers, or Booleans (true/false).
// (They can also hold more advanced structures like Objects, Arrays, and even Functions.
//  We'll see these in a bit...)

const age = 47; // Numbers can be Integers (like this)
const subTotal = 98.79; // or Decimal or Float (like this)

const payingWithCreditCard = true;

// You can initialize a variable with const (if it isn't going to change while you program runs)
// or with let if it will change.

// So we can initialize a variable with let...

let myTotal = 17.99; // 17.99

// and then update it later...

myTotal = myTotal + 4.99; // now it is 22.98
// we could have also written this as: myTotal += 4.99;
// (we just added an additional 4.99 to myTotal)

// We can also just re-declare it anything we want like:
myTotal = 128.97;

//challenges:
let count = 5 // this is defining the variable 
count = count + 1
//same as
count++
console.log(count)
console.log("the count is: " + count)


// const myName = "Lisa" // myName is immutable
// const color = "yellow"
// console.log(myName + "'s favorite color is " + color + ".") 
// console.log(`${myName}'s favorite color is ${color}.`)


const hours = 10
const min = hours * 60
const sec = min * 60
console.log(sec)


const myFavAnimal = "dog"
console.log("My favorite animal is a " + myFavAnimal)


// ~~~~ PRACTICE ~~~~

// 1. Create a mutable variable named count and set it to 5.

let counter = 5

// 2. Now add 1 to count.

counter ++

// 3. Print count to the console.

console.log(counter)

// 4. Create an immutable variable called myName and give it a value.

const myName = "Todd"

// 5. Create an immutable variable named color and give it a value.

const color1 = "purple"

// 6. Print out the name and color in the format "Todd's favorite color is purple."

console.log(myName + "'s favorite color is " + color1)








