document.querySelector(".a").addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });


////////////////////////////////////////  
// LIST TASKS CODE
////////////////////////////////////////

// Seleccionar elementos del DOM
inputButton = document.querySelector(".ls-button");
inputCamp = document.getElementById("input-camp");
addTask = document.getElementById("add-task");
// Función para crear nueva tarea
function createTask(text) {
    taskItem = document.createElement("div");
    taskItem.className = "task-item";
    
    checkbox = document.createElement("input");
    checkbox.className = "task-chkb"
    checkbox.type = "checkbox";
    
    taskText = document.createElement("div");
    taskText.className = "task-texto";
    taskText.textContent = text;
    
    removeButton = document.createElement("button");
    removeButton.className = "remove-task ls-button";
    removeButton.textContent = "-";
    
    
    // Evento para eliminar tarea
    removeButton.addEventListener("click", () => {
        addTask.removeChild(taskItem);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(removeButton);
    
    return taskItem;
}

// Evento para agregar tarea
inputButton.addEventListener("click", () => {
    text = inputCamp.value.trim();
    if (text) {
        newTask = createTask(text);
        addTask.appendChild(newTask);
        inputCamp.value = ""; // Limpiar input
    }
});

// Evento para eliminar tarea
addTask.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-task")) {
        taskItem = e.target.closest(".task-item");
        taskItem.remove();
    }
});
