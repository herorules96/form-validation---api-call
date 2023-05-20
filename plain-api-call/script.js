"use strict";

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((data) => {
      let todoList = data;
      console.log("prashant", todoList);
      todoList.map((todos) => {
        const formContainer = document.querySelector(".todo-list-container");
        const todoContent = document.createElement("div");
        todoContent.className = "todo-items";
        const todoTitle = document.createElement("h3");
        const todoStatus = document.createElement("span");
        todoTitle.innerText = `Task: ${todos.title}`;
        todoStatus.innerText = `Completed: ${todos.completed}`;
        todoContent.appendChild(todoTitle);
        todoContent.appendChild(todoStatus);
        formContainer.appendChild(todoContent);
      });
    })
    .catch(() => alert("Something Went Wrong !!"));
});
