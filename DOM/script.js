document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
              <span>${taskText}</span>
              <button class="delete-button"><img src="trash.svg" /></button>
          `;
      listItem.addEventListener("click", function () {
        listItem.classList.toggle("completed");
      });
      const deleteButton = listItem.querySelector(".delete-button");
      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });
});
