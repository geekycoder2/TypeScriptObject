"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
// Create an array of objects
let foods = [];
// Create food objects and push them into the array
const food1 = {
    name: "Biryani",
    price: "250",
    description: "Chicken Biryani"
};
foods.push(food1);
const food2 = {
    name: "Korma",
    price: "550",
    description: "Chicken Korma"
};
foods.push(food2);
const food3 = {
    name: "Dessert",
    price: "200",
    description: "Fudge Brownie"
};
foods.push(food3);
console.log(foods);
