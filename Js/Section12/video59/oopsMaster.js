//Encapsulation

class BankAccount{
    #bankBalance;
    constructor(name,bankBalance){
        this.name=name
        this.#bankBalance=bankBalance;
    }
    deposite(amount){
        this.#bankBalance+=amount;
    }
    getBalance(){
        return `your bank balance is ${this.#bankBalance}`;
    }
}
let sbiId=new BankAccount("akash",5000);
console.log(sbiId.getBalance());

// Abstraction

class CoffieMachine{
    hotMilk(){
        console.log("hot milk is mixing with the coffie");
        this.coffeExtract();
    }
    coffeExtract(){
        return `coffie ready to serve`;
    }
    start(){
        console.log('starting the process');
        this.hotMilk();
        return this.coffeExtract();
    }
}

let myMachine=new CoffieMachine();
console.log(myMachine.start());

//polymorphism

class Bird{
    fly(){
        return `flying...`;
    }
}
class Penguin extends Bird{
    fly(){//method overriding
        return`penguien can't fly`
    }
}

let parrot=new Bird()
console.log(parrot.fly());
let pengu=new Penguin();
console.log(pengu.fly());

//static block

class Sum{
    static add(a,b){
        return a+b;
    }
    constructor(x,y){
        this.x=x
        this.y=y
    }
    addition(){
        return this.x+this.y;
    }
}
console.log(Sum.add(2,3));
let myCal=new Sum(4,5)
console.log(myCal.addition());

//getters and setters
class Cal{
    #num;
    constructor(num1){
        if(num1<0){
            console.error(`invalid number`);
            this.#num=0;
        }else{
            this.#num=num1;
        }
    }
    get num(){
        return `the number is ${this.#num} `;
    }
    set num(num2){
        if(num2<0){
            console.error(`invalid number...input can't be negetive`);
        }else{
            this.#num=num2;
        }
    }
}

let newNum=new Cal(10);
// let newNum=new Cal(-5);
console.log(newNum.num);
// newNum.num=-4;
newNum.num=4;
console.log(newNum.num);
