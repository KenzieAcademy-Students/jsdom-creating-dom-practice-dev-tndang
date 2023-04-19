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

  h3Element1.innerText = "TodoList";
  theApp.append(h3Element1);
}

renderTodoApp();
