// Change text content
document.getElementById("change-text-btn").addEventListener("click", () => {
  const message = document.getElementById("message");
  message.textContent = "You clicked the button! 🎉";
});

// Toggle CSS class
document.getElementById("toggle-style-btn").addEventListener("click", () => {
  const heading = document.getElementById("main-heading");
  heading.classList.toggle("highlight");
});

// Add new list item
document.getElementById("add-element-btn").addEventListener("click", () => {
  const list = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
});

// Remove last list item
document.getElementById("remove-element-btn").addEventListener("click", () => {
  const list = document.getElementById("item-list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
