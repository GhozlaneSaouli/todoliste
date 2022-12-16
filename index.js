window.onload = () => {
  Object.keys(localStorage)
    .sort((a, b) => a - b)
    .forEach((key) => addToDoItem(key, localStorage[key]));

  document.getElementById("textFooter").innerText =
    "You have  " + localStorage.length + "   " + "pending tasks";
};

function addToDoItem(key, value) {
  let todoItem = document.createElement("div");
  todoItem.setAttribute("class", "containerRow");

  let divText = document.createElement("div");
  divText.id = key;
  divText.innerText = value;

  let button = document.createElement("button");
  button.addEventListener("click", () => {
    localStorage.removeItem(key);
    location.reload();
  });
  button.setAttribute("class", "delete");
  button.innerText = "Delete";

  todoItem.appendChild(divText);
  todoItem.appendChild(button);

  document.getElementById("items").appendChild(todoItem);
}

function handleClick() {
  const input = document.getElementById("textInput");
  const key = Date.now();
  const value = input.value;

  if (value) {
    localStorage[key] = value;
    location.reload();
  } else {
    alert("Veuillez saisie d'abort votre to do");
  }
}

function deleteAll() {
  localStorage.clear();
  location.reload();
}
