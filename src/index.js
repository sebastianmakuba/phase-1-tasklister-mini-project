// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const task = taskInput.value; // Get the task description from the input field

    
      // Create a new list item and append the task description
      const listItem = document.createElement('li');
      listItem.textContent = task;

      // Append the new list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      form.reset()
    // }
  });
});
