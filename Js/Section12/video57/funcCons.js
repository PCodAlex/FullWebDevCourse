function Zoo(animal){
    this.animal=animal
    this.sound=()=>`${animal} do sound`
}
let bear=new Zoo("bear");
console.log(`bear`,bear.sound());

function School(student){
    this.student=student
}
School.prototype.study=()=>{
    return `${this.student} do study a lot`;
}

let amit=new School("amit");
console.log(`Amit`,amit.study());

function Obj(objName){
    if(!new.target){
        throw new error("no new keyword");
    }
    this.ObjName=objName
}
let oneObj=new Obj("oneObj");
let secObj=new Obj("secObj");
// let secObj=Obj("secObj");