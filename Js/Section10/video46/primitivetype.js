//number
let num1=57;
console.log(num1);
console.log(typeof num1);

let num2=new Number(45);
console.log(num2);
console.log(num2.valueOf());
console.log(typeof num2);

//boolean
let isLoggedin=true;
console.log(isLoggedin);

let isActive=new Boolean(true);
console.log(isActive);
console.log(isActive.valueOf());
console.log(typeof isActive);

//null and undefined 
let userName;
console.log(userName);
console.log(typeof userName);

let regNo=null;
console.log(regNo);
console.log(typeof regNo);

//String
let welcome='welcome';
let name='akash';
console.log(welcome+" "+name);
console.log(`${welcome} to our company Mr ${name}`);//string interpolation

//symbol
let rollNum= Symbol(123);
let rollNum1= Symbol(123);

console.log(rollNum==rollNum1);
