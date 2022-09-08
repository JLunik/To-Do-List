const appStatus = {
    tasks: [], 
    template: "",
    todolist: {},
}

document.addEventListener("DOMContentLoaded", evt => {

    let todolist = document.querySelectorAll(".todo-list")[0]

    appStatus.todolist = todolist;    
    appStatus.template = todolist.innerHTML;

    todolist.innerHTML = "";

    console.log(appStatus)

    addTodo("Limpar a casa", 0)
    addTodo("Limpar a casa", 1)
    addTodo("Limpar a casa", 2)
})

const addTodo = (nome, id) => {
    let newtodo = appStatus.template.replaceAll("[$task.name]", nome).replaceAll("[$task.id]", id);
    let oldHTML = appStatus.todolist.innerHTML;
    oldHTML += newtodo;
    appStatus.todolist.innerHTML = oldHTML;
}