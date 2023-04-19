let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

let renderTodoApp = function() {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here
  let theApp = document.getElementById("app");
  let h3Element1 = document.createElement("h3");
  let ulElement = document.createElement("ul");

  h3Element1.innerText = "TodoList";
  theApp.append(h3Element1);

  for (let index = 0; index < todos.length; index +=1) {
    let liElement = document.createElement("li");
    let currentTask = todos[index];

    liElement.innerText = currentTask;
    liElement.className = "list-item";
    ulElement.append(liElement);
  }

  theApp.append(ulElement);
}

renderTodoApp();
