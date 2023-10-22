const input = document.getElementById("input");
const addButton = document.getElementById("button");
const tasksList = document.getElementById("tasks");

function createTask() {
  const newTask = document.createElement("li");
  const newTaskText = input.value;
  newTask.textContent = newTaskText;
  tasksList.append(newTask);
  input.value = "";
}

function checkTask(evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
  }
}

addButton.addEventListener("click", createTask);
tasksList.addEventListener("click", checkTask);
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") createTask();
});
