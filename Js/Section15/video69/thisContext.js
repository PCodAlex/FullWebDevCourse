//bind call and apply

const Person={
    name:"akash",
    greet(){
        console.log(`hello ${this.name} sir/madam`);
    }
}

Person.greet();

let infoStud=Person.greet
infoStud();

let infoEmp=Person.greet.bind({name:"ankan"});
infoEmp();