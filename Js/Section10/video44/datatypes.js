//**********primitive datatype**********

let carName="audi"
let carNumber=1007;
let isRegisrtered=true;
let carPrice=1234567890;
let carOrgNumber;
let carExtraWheel=null;

console.log(carName,typeof(carName));
console.log(carNumber,typeof(carNumber));
console.log(isRegisrtered,typeof(isRegisrtered));
console.log(carPrice,typeof(carPrice));
console.log(carOrgNumber,typeof(carOrgNumber));
console.log(carExtraWheel,typeof(carExtraWheel));


//**********non primitive datatype**********
// object
let carInfo={carName,carNumber,isRegisrtered,carPrice,carOrgNumber,carExtraWheel};
console.log("Cars Information :"+carInfo,typeof(carInfo));
//array
let futureCars=["BMW","Mercedeas","Bugati","Ferrari","Pagani","RangeRover"];
console.log(futureCars,typeof(futureCars));
//function
function indexWithValue(car){
    return car+":"+typeof(car);
}
console.log(indexWithValue(carName));