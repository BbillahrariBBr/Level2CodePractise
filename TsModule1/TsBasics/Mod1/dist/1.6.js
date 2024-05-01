"use strict";
// learning function
// --> two types, Normal func, Arrow func
// normal func
function add(num1, num2 = 14) {
    return num1 + num2;
}
//console.log(add(2,true))
//arrow
const addArrow = (num1, num2) => num1 + num2;
// OBJJECT  --> FUNC --> METHOS
const poorUser = {
    name: 'Mezba',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
        //return `My new Balance is : ${this.balance+balance} tk`
    },
    showBalance(balance) {
        return `My new Balance is : ${this.balance + balance} tk`;
        //return this.balance+balance
    }
};
//use map in array
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
