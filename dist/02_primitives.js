"use strict";
let user = "Dilip";
let age = 25;
let isMale = true;
const big = 2n ** 63n - 1n;
const Token = Symbol('TOKEN');
// console.log(Token)
function yearsToDay(years) {
    return years * 365;
}
// -------------------------------------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX------------------------------------------------------------------------
// Special
let title = "intro";
title = "raj";
// title = undefined; //strick null checks 
let subtitle = "something"; // now since i have explicitly mentioned undefined it would not throw error
subtitle = undefined;
console.log(title);
function log(msg) {
    console.log(msg); // if a function never retruns anything then use return type as "never"
}
// never use retrun type as "any" avoid it 
const valueAny = JSON.parse('[{"name" : "Dilip", "age" : 25}, {"name" : "Divya", "age" : 21}]'); //JSON.parse creates something like dictornaries in python
console.log(valueAny[0].name);
