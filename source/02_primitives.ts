let user : string = "Dilip";

let age : number = 25;

let isMale : boolean =  true;

const big : bigint = 2n ** 63n - 1n;

const Token : unique symbol =  Symbol('TOKEN')
// console.log(Token)

function yearsToDay(years : number) : number {
    return years * 365
}


// -------------------------------------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX------------------------------------------------------------------------

// Special

let title : string = "intro"
title = "raj"
// title = undefined; //strick null checks 

let subtitle : string | undefined = "something"; // now since i have explicitly mentioned undefined it would not throw error
subtitle = undefined;

console.log(title)

function log(msg : string) : void {  // void - because this function is not returning anything
    console.log(msg)  // if a function never retruns anything then use return type as "never"
}

// never use retrun type as "any" avoid it 

const valueAny = JSON.parse('[{"name" : "Dilip", "age" : 25}, {"name" : "Divya", "age" : 21}]') //JSON.parse creates something like dictornaries in python

console.log(valueAny[0].name)