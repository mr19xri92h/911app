document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    
    if (taskInput.value.trim() === '') {
        alert('Введите текст задачи!');
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskInput.value.trim(),
        date: taskDate.value,
        completed: false
    };
    
    let tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);
    
    renderTask(task);
    
    taskInput.value = '';
    taskDate.value = '';
}

function renderTask(task) {
    const tasksList = document.getElementById('tasks-list');
    
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${task.completed ? 'completed' : ''}`;
    taskCard.dataset.id = task.id;
    
    taskCard.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
        <div class="task-text">${task.text}</div>
        <div class="task-date">${formatDate(task.date)}</div>
        <div class="task-actions">
            <button onclick="deleteTask(${task.id})">Удалить</button>
        </div>
    `;
    
    tasksList.appendChild(taskCard);
}

function toggleTask(id) {
    let tasks = getTasksFromStorage();
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    
    saveTasksToStorage(tasks);
    refreshTasksList();
}

function deleteTask(id) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== id);
    
    saveTasksToStorage(tasks);
    refreshTasksList();
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll('.task-checkbox:checked');
    const idsToDelete = Array.from(checkboxes).map(checkbox => 
        parseInt(checkbox.closest('.task-card').dataset.id)
    );
    
    if (idsToDelete.length === 0) {
        alert('Выберите задачи для удаления!');
        return;
    }
    
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => !idsToDelete.includes(task.id));
    
    saveTasksToStorage(tasks);
    refreshTasksList();
}

function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => renderTask(task));
}

function refreshTasksList() {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = '';
    loadTasks();
}

function getTasksFromStorage() {
    const tasksJson = localStorage.getItem('porsche-tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem('porsche-tasks', JSON.stringify(tasks));
}

function formatDate(dateString) {
    if (!dateString) return '';
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
}