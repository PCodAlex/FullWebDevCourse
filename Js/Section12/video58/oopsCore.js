let car ={
    make:"toyota",
    model:"camery",
    year:2026,
    start:function(){
        return `${this.make} car got stareted in ${this.year}`
    }
};
console.log(`car:`,car.start());

function Person(name,age){
    this.name=name
    this.age=age
    this.info=()=>`${this.name} age is ${this.age}`
}

let amit=new Person("amit",25);
let anus=new Person("anus",21);

console.log(`Amit :`,amit.info());
console.log(`Anus :`,anus.info());

function Animal(types){
    this.types=types
}

Animal.prototype.sound=function(){
    return `${this.types} makes sound`;
}    

let tiger=new Animal("tiger");
console.log(`tiger`,tiger.sound());

// Array.prototype.custom=()=>`this is a customize method ${this}`;  --> this is a customize method [object Object]

Array.prototype.custom=function(){
    return `custom method ${this}`
}

let arr=[1,2,3,4];
console.log(arr.custom());  // -->custom method 1,2,3,4

//prototype chaining 

// class

class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    start(){
        return `${this.model} is came from ${this.make}`
    }
}

class Car extends Vehicle{
    engine(){
        return `starting the engine of ${this.model}`
    }
}

let myCar=new Car("TATA","Safari");
console.log(myCar.start());
console.log(myCar.engine());