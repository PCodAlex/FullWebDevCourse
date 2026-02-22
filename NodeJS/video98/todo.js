const fs=require('fs');//fs--> file system module //import the file syystem module  form Node.js , it is a built in module // itr allows to read , write , create and delete file 
const filePath="./tasks.json";//file where tasks are stored 

const loadTask=()=>{//loads the tasks
    try {
       const dataBuffer=fs.readFileSync(filePath);// it doesnot return string it returns data buffer //it reads the tasks.json file syncronously return buffer {liiks like :<Buffer 5b 7b 22 74 61 73 6b 22 ... >}
       const dataJSON=dataBuffer.toString();//it converts buffer to string {looks like : '[{"task":"Study Java"}]' }
       return JSON.parse(dataJSON);//it converts string to js array/object type {looks like : [{ task: "Study Java" }]}
    } catch (error) {
        return [];//if file doesnot exist readFilleSync will throw error so catch block will run and return an empty array //So first time app runs → no crash.
    }
}

const savaTask=(tasks)=>{
    const dataJSON=JSON.stringify(tasks);//converts js array to string {looks like : [{ task: "Study Java" }] -> '[{"task":"Study Java"}]' }
    fs.writeFileSync(filePath,dataJSON);//Writes that string into tasks.json.//if file doesnot exits it can create the file 
}

const addTask=(task)=>{
    const tasks=loadTask();//load old tasks 
    tasks.push({task});//add new tasks 
    savaTask(tasks);// save again
    console.log("task added :",task);// print task complete message
}

const listTask=()=>{
    const tasks=loadTask();//loads the tass from tasks.json file
    tasks.forEach((task,index) => {
        console.log(`${index+1} - ${task.task}`);//[{"task":"Study Java"},{"task":"Go to gym"}] in this tasks array task is an element ({"task":"Study Java"}) inside the the element there is an object so to get the task we are using task.task
    });
}

const removeTask = (index) => {
    const tasks = loadTask();// loads the tasks from tasks.json file

    if (index > 0 && index <= tasks.length) {
        const removed = tasks.splice(index - 1, 1);//tasks.splice retun an array which is stored as removed 
        savaTask(tasks);// rest array saved in the tasks.jsn file
        console.log("Task removed:", removed[0].task);// removed item has shown as removed 
    } else {
        console.log("Invalid task number");// if the index is invalid it will print 
    }
};

const command=process.argv[2];
const argument=process.argv[3];
/* if we run :
node app.js add "Study"
Node automatically creates array:
[
  'node',
  'app.js',
  'add',
  'Study'
]
*/ 

/* 
🔹 process

process is a global object in Node.js that gives information about the current running program.

It lets you access:

Environment variables

Current working directory

Command line arguments

Exit the program

It represents the current Node.js process.

🔹 process.argv

argv means argument vector.

It is an array that stores the command line arguments used to run the file.

Example:
node app.js add "Study"

process.argv becomes:

[
  'node',      // index 0 → Node executable path
  'app.js',    // index 1 → File name
  'add',       // index 2 → First argument
  'Study'      // index 3 → Second argument
]

So:

process.argv[2] // "add"
process.argv[3] // "Study

*/

if(command==="add"){
    addTask(argument);
}else if(command==="list"){
    listTask();
}else if(command==="remove"){
    removeTask(parseInt(argument));
}else{
    console.log('command not found');
}
