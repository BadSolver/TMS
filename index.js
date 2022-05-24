"use strict";

init();

function init() {
  const root = document.querySelector("#root");
  root.className = "container";
  const title = createElement("h1", "text-center", "TODO LIST");
  const header = createHeader();
  const todoList = createTodoList();

  root.append(title, header, todoList);

  const todos = getStorageTodos();
  renderTodos(todos);
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

function createHeader() {
  const header = createElement("header", "d-flex gap-2 mb-4");
  header.id = "header";

  const input = createElement("input", "form-control");
  input.placeholder = "Add a new task";
  input.id = "header-input";

  const addBtn = createElement("button", "btn btn-success", "Add");
  addBtn.id = "add-btn";

  const btnDeleteAll = createElement("button", "btn btn-danger", "Delete All");
  btnDeleteAll.id = "btn-delete-all";

  header.append(btnDeleteAll, input, addBtn);

  header.addEventListener("click", onHeaderClick);

  return header;
}

function createTodoList() {
  const list = createElement("ul", "list-group");
  list.id = "todo-list";
  return list;
}

function createTodoItem(text, id, isChecked = false, todoDate) {
  const item = createElement(
    "li",
    "list-group-item d-flex align-items-center gap-3"
  );

  const checkbox = createElement("input", "form-check-input m-1");
  checkbox.type = "checkbox";
  checkbox.id = 'checkbox'

  const label = createElement("label", "form-check-label");
  const itemText = createElement("span", "flex-grow-1", text);
  const btnDeleteItem = createElement("button", "btn-danger btn-sm", "Del");
  btnDeleteItem.id = 'btn-delete-item'

  todoDate = createElement("span", "date", new Date().toLocaleDateString());

  item.append(checkbox, label, itemText, todoDate, btnDeleteItem);
  item.id = id;

  if (isChecked) {
    checkbox.checked = true;
    item.classList.toggle("text-decoration-line-through");
    item.classList.toggle("bg-success");
  }

  item.addEventListener("click", onItemClick);

  return item;
}

function onHeaderClick(event) {
  const todoList = document.querySelector("#todo-list");
  const tasks = getStorageTodos();
  let textInput = document.querySelector("#header-input").value;
  let listItem = document.querySelectorAll("li");

  if (event.target.id === "add-btn" && textInput !== "") {
    const task = new Tasks(textInput);
    tasks.push(task);

    todoList.append(createTodoItem(textInput, task.id));
    document.querySelector("#header-input").value = "";
  } else if (event.target.id === "btn-delete-all") {
    listItem.forEach((item) => item.remove());
    tasks.length = 0;
  }
  setLocal(tasks);
}

function getStorageTodos() {
  const tasks = localStorage.getItem("tasks");
  if (!tasks) {
    localStorage.setItem("tasks", JSON.stringify([]));
    return [];
  }
  return JSON.parse(tasks);
}

function renderTodos(tasks) {
  const todoList = document.querySelector("ul");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  for (const task of tasks) {
    const taskHTML = createTodoItem(
      task.text,
      task.id,
      task.isChecked,
      task.date
    );
    taskHTML.addEventListener("click", onItemClick);
    todoList.append(taskHTML);
  }
}

function Tasks(text) {
  this.id = Math.round(Math.random() * 1000).toString();
  this.date = new Date().toLocaleDateString();
  this.text = text;
  this.isChecked = false;

  const task = {
    id: this.id,
    date: this.date,
    text: this.text,
    isChecked: this.isCheked,
  };

  return task;
}

function setLocal(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function onItemClick(event) {
  let tasks = getStorageTodos();

  if (event.target.id === "checkbox") {
    this.classList.toggle("text-decoration-line-through");
    this.classList.toggle("bg-success");

    tasks = tasks.map((item) => {
      if (item.id === this.id) {
        item.isChecked ? (item.isChecked = false) : (item.isChecked = true);
      }
      return item;
    });
  } else if (event.target.id === "btn-delete-item") {
    tasks = tasks.filter((item) => item.id !== this.id);
    this.remove();
  }
  setLocal(tasks);
}
