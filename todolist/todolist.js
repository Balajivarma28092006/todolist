
const inputField = document.getElementById('input');
const addButton = document.getElementById('add');
const tasklist = document.getElementById('list');
const completedCounter = document.getElementById('completed-counter');
const uncompletedCounter = document.getElementById('uncompleted-counter');

let completedTasks = 0;
let uncompletedTasks = 0;

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = inputField.value.trim(); 
    if (taskText === '') {
        alert('Enter a task!'); 
        return; 
    }

   
    const listItem = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', toggleTaskStatus);

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskSpan));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

   
    listItem.append(checkBox, taskSpan, editButton, deleteButton);

   
    tasklist.appendChild(listItem);

   
    inputField.value = ''; 

    
    uncompletedTasks++;
    updateCounters();
}

function toggleTaskStatus(event) {
    if (event.target.checked) {
        completedTasks++;
        uncompletedTasks--;
    } else {
        completedTasks--;
        uncompletedTasks++;
    }
    updateCounters();
}

function editTask(taskSpan) {
    const currentTask = taskSpan.textContent;
    const newTaskText = prompt('Edit task:', currentTask);

    if (newTaskText && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    } else {
        alert('Task text cannot be empty!');
    }
}

function deleteTask(event) {
    const listItem = event.target.parentElement;
    const checkbox = listItem.querySelector('input[type="checkbox"]');

    if (checkbox.checked) {
        completedTasks--;
    } else {
        uncompletedTasks--;
    }

    tasklist.removeChild(listItem);
    updateCounters();
}

function updateCounters() {
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}
