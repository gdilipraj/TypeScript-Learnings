// goal -> Understand when to let TypeScript infer types
// ts -> knows JS very well
// when TS will automatically write types & when we are going to write


//following are the 2 ways to define a variable 
// but TypeScript understands some of the types by itself 
let count1 : number = 0;
let count2 = 0;

let sum = count1 + count2;

console.log(sum);