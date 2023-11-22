const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');

form.addEventListener('submit', addTask);

tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);

function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value;

  const taskHTML = `          <li class="task-list-item">
  <span class="task-title">${taskText}</span>
  <div class="task-item__buttons">
    <button data-action="done" class="task-list-button">
    <img src="/img/icons8-ок-20.svg" alt="ok" />
    </button>
    <button data-action="delete" class="task-list-buttondelete">
    <img src="/img/icons8-мусор-20.svg" alt="delete" />
    </button>
  </div>
</li>`;

  tasksList.insertAdjacentHTML('beforeend', taskHTML);

  taskInput.value = '';
  taskInput.focus();
}

function deleteTask(event) {
  if (event.target.dataset.action === 'delete') {
    const parenNode = event.target.closest('li');
    console.log(parenNode);
    parenNode.remove();
  }
}

function doneTask(event) {
  if (event.target.dataset.action === 'done') {
    const parentNode = event.target.closest('li');
    const taskTitle = parentNode.querySelector('span');
    taskTitle.classList.toggle('task-title--done');
  }
}
