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

  console.log(list);
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

  ui.removeToDo(e);
});

// Mark complete
document.querySelector('#todo-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI();

  ui.completed(e);
});
