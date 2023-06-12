"use strict";
const Dustin = {
    id: 1,
    name: "Dustin",
    height: "5-11",
};
const Justin = {
    id: 1,
    name: "Justin",
    height: "5-11",
    securityClearance: "Sec 1",
    seasonal: true,
};
const Daniel = {
    id: 1,
    name: "Justin",
    height: "5-11",
    securityClearance: "Sec 1",
    seasonal: false,
};
const employees = [];
employees.push(Justin, Dustin, Daniel);
employees.forEach((thing) => {
    console.log(thing.name);
});
//ES6 Function (arrow function)
const Kim = () => {
    console.log("Hi I'm Kim");
    return 1;
};
Kim();
