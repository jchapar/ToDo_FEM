// Todo Constructor
function Todo(item) {
  this.item = item;
}

// UI Constructor
function UI() {}

// Add todo to list
UI.prototype.addTodoToList = function (todo) {
  // Get List Element
  const list = document.getElementById('todo-list');
  // Create list item element
  const li = document.createElement('li');
  // Add class
  li.classList.add('todo-item');
  // Add html content
  li.innerHTML = `
  <div class="flex flex-row items-center">
    <input type="checkbox" name="check" id="check" class="checkbox" />
    <p class="text-base text-primaryTextColor todo-text">${todo.item}</p>
  </div>
  <img src="/images/icon-cross.svg" alt="Delete Icon" class="cursor-pointer delete-btn" />
  `;
  // Append to the list
  list.appendChild(li);
};

// Update to do count
UI.prototype.updateCount = function () {
  // Get to do list
  const list = document.getElementById('todo-list');
  // Confirm the number of to dos within the list
  let countTotal = list.childElementCount;
  // Get the count el
  const count = document.querySelector('#count');
  // Set count el to the number of to dos within the list
  count.innerText = countTotal;
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('todo').value = '';
};

// Toggle Theme
UI.prototype.toggleTheme = function () {
  document.querySelector('body').classList.toggle('dark-theme');
};

// Remove To do
UI.prototype.removeToDo = function (e) {
  if (e.target.classList.contains('delete-btn')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.remove();
    }
  }
};

// Clear all completed to dos
UI.prototype.clearCompleted = function () {
  // Get to do list
  const list = document.getElementById('todo-list');

  const children = list.querySelectorAll('.completed');

  for (let i = 0; i < children.length; i++) {
    children[i].parentElement.parentElement.remove();
  }
};

// Add complete class
UI.prototype.completed = function (e) {
  if (e.target.classList.contains('checkbox')) {
    e.target.nextElementSibling.classList.toggle('completed');
  }
};

// Event Listeners =============================
// Get todo input field
const todoInput = document.getElementById('todo');

todoInput.addEventListener('change', () => {
  // Get todo input value
  const todoValue = todoInput.value;

  // Instantiate book
  const todo = new Todo(todoValue);

  // Instantiate UI
  const ui = new UI();

  // Add item to list
  ui.addTodoToList(todo);

  // Update count
  ui.updateCount();

  // Clear Input field
  ui.clearFields();
});

// Theme toggle event
document.querySelector('.toggle').addEventListener('click', () => {
  // Instantiate UI
  const ui = new UI();

  // Toggle Dark mode
  ui.toggleTheme();
});

// Delete To Do
document.querySelector('#todo-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI();

  // Remove todo
  ui.removeToDo(e);

  // Update count
  ui.updateCount();
});

// Delete all completed
document.querySelector('#clear-btn').addEventListener('click', function () {
  // Instantiate UI
  const ui = new UI();

  // Clear all completed to dos
  ui.clearCompleted();

  // Update count
  ui.updateCount();
});

// Mark complete
document.querySelector('#todo-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI();

  // Mark to do as completed
  ui.completed(e);
});
