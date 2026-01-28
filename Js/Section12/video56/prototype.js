let computer={
    cpu:12,
    ram:8,
    rom:512
}
let dell={
    display:"LCDscreen",
    keyboard:"mechanical",
    __proto__:computer 
    // _ _ ->dundur
}
console.log(`computer`,computer.__proto__);
console.log(`dell`,dell.__proto__);

let car={
    wheel:4,
    sits:7,
    engine:"horsepower"
}
let tesla={
    driver:"ai",
    owner:"elon musk"
}
Object.setPrototypeOf(tesla,car);
console.log(`tesla`,Object.getPrototypeOf(tesla));
console.log(`tesla`,tesla.hasOwnProperty("driver"));
console.log(`tesla`,tesla.hasOwnProperty("sits"));