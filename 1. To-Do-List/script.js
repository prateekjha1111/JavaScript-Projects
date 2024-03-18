document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                label.classList.add('completed');
            } else {
                label.classList.remove('completed');
            }
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
