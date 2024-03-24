const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="row mx-auto justify-content-center">

    <div class="col-3 m-auto">
    <input type="checkbox" class="checkbox">
</div>
<div class="col-6 m-auto">
    <p class="m-auto">${taskText}</p>
</div>
<div class="col-3 m-auto">
    <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
</div>
</div>
  `;
    todoList.appendChild(li);

    const checkbox = li.querySelector('.checkbox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
}