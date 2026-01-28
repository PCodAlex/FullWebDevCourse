/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

let calculateTotal=(price,quantity)=>{
    return price*quantity;
}
let totalCost=calculateTotal(500,7);
console.log(totalCost);
/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

let makeTea=(teaType)=>{
    return `making ${teaType}`;
}
let ProcessTeaOrder=(teaFunction)=>{
    return teaFunction('rose tea');
}

let teaStatus=ProcessTeaOrder(makeTea);
console.log(teaStatus);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

let createTeaMaker=(teaType)=>{
    return makingSts(teaType);
}
let makingSts=(teaType)=>{
    return `Making ${teaType}`;
}
let teaMaker=createTeaMaker('green tea');
console.log(teaMaker);