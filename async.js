// the keyword "async" can be added to any function. This function will now 
// automatically return a Promise.

//in other words, asyn turns a regular (synchronous) function into a asynchronous one.


async function multiplyTwoNumbers(a, b) {
    return a * b;
}

//now we use the keyword "await" (similar to .then above to wait
//for the answer (for the promise to resolve.)

const answer = await multiplyTwoNumbers(10,30) //300, this will invoke the function.
console.log(answer)
//above is the same as below
//in a function we have to be async function in order to use await.

multiplyTwoNumbers (10,30)
.then(answer => console.log(answer)) // same as line 14
// .then(console.log), also same as
// const answer = await multiplyTwoNumbers (10,30)
//console.log(answer)


