document.addEventListener("DOMContentLoaded",function(){
    const userInput=document.getElementById("todo-input");
    const addBtn=document.getElementById("add-task-btn");
    const listArea=document.getElementById("todo-list");

    let todoItems=JSON.parse(localStorage.getItem("todoItems"))||[];

    todoItems.forEach(task => {
        renderToDo(task);
    });

    addBtn.addEventListener("click",function(){
        let taskInput=userInput.value.trim();
        if(taskInput=="")return;  
        const newTask={
            id:Date.now(),
            task:taskInput,
            completionStatus:false
        }
        todoItems.push(newTask);
        addToDb(); 
        renderToDo(newTask);   
        userInput.value="";
        console.log(todoItems);
    });

    function renderToDo(task){
        const todoItemList=document.createElement("li");
        todoItemList.setAttribute('todo-item-id',task.id);
        todoItemList.innerHTML=`<span>${task.task}</span>
        <button>Delete</button>`;
        todoItemList.addEventListener("click",(e)=>{
            if(e.target.tagName==="BUTTON")return ;
            task.completionStatus=!task.completionStatus;
            todoItemList.classList.toggle('completionStatus');
            addToDb();
        })
        todoItemList.querySelector("button").addEventListener("click",(e)=>{
            e.stopPropagation();//prvent toggle from firing
            todoItems=todoItems.filter((t)=>{
                return t.id!==task.id;
            });
            todoItemList.remove();
            addToDb();
        })
        listArea.appendChild(todoItemList);
    }

    function addToDb(){
        localStorage.setItem("todoItems",JSON.stringify(todoItems));
    };
})