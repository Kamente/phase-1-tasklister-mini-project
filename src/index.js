document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  function createTaskItem(description) {

    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');

    taskText.innerText = description;

    deleteButton.innerText = 'Remove';
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });


    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  }

  createTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const taskDescription = document.getElementById('new-task-description').value;

    createTaskItem(taskDescription);

    document.getElementById('new-task-description').value = '';
  });
});
