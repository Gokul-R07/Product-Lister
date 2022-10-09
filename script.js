var input = document.querySelector("form input");
var ul = document.querySelector("ul");
var form = document.querySelector("form");
form.addEventListener("submit", addItem);
var alertMessage = document.querySelector(".alert");
alertMessage.textContent = "Can't add empty item";
alertMessage.style.background = "red";
alertMessage.style.color = "white";
alertMessage.className = "card";
alertMessage.classList.add("hidden");
function addItem(event) {
  event.preventDefault();
  if (input.value == "") {
    alertMessage.classList.remove("hidden");
    setTimeout(() => {
      alertMessage.classList.add("hidden");
    }, 1000);
  }
  if (input.value != "") {
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = input.value;
    ul.appendChild(li);
    var btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
    btn.textContent = "X";
    li.appendChild(btn);
    input.value = "";
  }
}

ul.addEventListener("click", removeItem);
function removeItem(event) {
  if (event.target.classList.contains("delete"))
    ul.removeChild(event.target.parentElement);
}

var filter = document.querySelector("#filter");
filter.addEventListener("keyup", display);
function display(event) {
  var searchItem = event.target.value.toLowerCase();
  var items = document.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(searchItem) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
