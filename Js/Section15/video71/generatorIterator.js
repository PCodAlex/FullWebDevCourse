function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen=numberGenerator();

/* use each section by commenting other */

console.log(gen.next());//{ value: 1, done: false }
console.log(gen.next());//{ value: 2, done: false }
console.log(gen.next());//{ value: 3, done: false }
console.log(gen.next());//{ value: undefined, done: true }

console.log(gen.next().value)//1
console.log(gen.next().value)//2
console.log(gen.next().value)//3
console.log(gen.next().value)//undefined

console.log(gen.next().done)//false
console.log(gen.next().done)//false
console.log(gen.next().done)//false
console.log(gen.next().done)//true