let count = 0;

function addTask(){
    let input = document.getElementById("taskInput");

    let task = input.value;
    if(task == ''){
        return;
    }

    //CONTADOR DO TÍTULO

    let titulo = document.getElementById("title");



    let listItem = document.createElement("li");

    let text = document.createElement("span");
    text.textContent = task;
    

    let editButton = document.createElement("button");
    editButton.textContent = "editar";
    editButton.className = "editButton";
    editButton.onclick = function(){

        let newTask = prompt("Edit sua tarefa:", this.textContent);

        if(newTask !== null && newTask !== ""){
            text.textContent = newTask;
        }
    }

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "deletar";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function(){
                   
            listItem.remove();
            subUpdate(title);
            if(count == 0){
                titulo.textContent = "Minha Lista de Tarefas:" + "(A lista está vazia)";
            }
                  
    }

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";

    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";

    editButton.appendChild(editIcon);
    deleteButton.appendChild(deleteIcon);
    listItem.appendChild(text);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    let list = document.getElementById("taskList");
    list.appendChild(listItem);

    input.value = "";

    sumUpdate(title);
}

function deleteTask(){
    let list = document.getElementById("taskList");
    list.remove();
    
    let titulo = document.getElementById("title");
    zeroUpdate(title);

}

function sumUpdate(titulo){

    count++;
    titulo.textContent = "Minha Lista de Tarefas:" + "(" + count +")";

}

function subUpdate(titulo){
    count--;
    titulo.textContent = "Minha Lista de Tarefas:" + "(" + count +")";

}

function zeroUpdate(titulo){
    count = 0;
    titulo.textContent = "Minha Lista de Tarefas:" + "(" + count +")";
    if(count == 0){
       titulo.textContent = "Minha Lista de Tarefas:" + "(A lista está vazia)";
   }
}
