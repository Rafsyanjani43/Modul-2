let taskList = [];

function addTask() {
    const inputTask = document.getElementById('input-task');
    const taskText = inputTask.value;

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText
    };

    taskList.push(task);
    inputTask.value = "";
    renderTasks();
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const newTaskText = prompt("Edit your task:");
    if (newTaskText !== null && newTaskText !== "") {
        const task = taskList.find(task => task.id === id);
        task.text = newTaskText;
        renderTasks();
    }
}

function renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = "";

    taskList.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskListContainer.appendChild(li);
    });
}
