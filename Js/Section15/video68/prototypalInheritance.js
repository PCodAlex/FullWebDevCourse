function Person(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log(`hello ${this.name}`);
}

let akash=new Person('akash');
akash.greet();