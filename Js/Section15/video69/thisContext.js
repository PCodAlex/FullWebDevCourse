//bind call and apply

const Person={
    name:"akash",
    greet(){
        console.log(`hello ${this.name} sir/madam`);
    }
}

Person.greet();//hello akash sir/madam

let infoStud=Person.greet
infoStud();//hello undefined sir/madam

let infoEmp=Person.greet.bind({name:"ankan"});
infoEmp();//hello ankan sir/madam