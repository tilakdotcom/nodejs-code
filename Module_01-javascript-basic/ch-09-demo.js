<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Basic To-Do List App</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    input { padding: 8px; width: 200px; }
    button { padding: 8px 12px; margin-left: 5px; }
    ul { list-style-type: none; padding: 0; }
    li { margin: 5px 0; }
  </style>
</head>
<body>

  <h1>📝 To-Do List</h1>
  
  <input type="text" id="taskInput" placeholder="Enter a task..." />
  <button id="addTaskButton">Add Task</button>
  
  <ul id="taskList"></ul>

  <script>
    // Select DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }

      // Create list item
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.style.marginLeft = '10px';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      // Append delete button to list item
      li.appendChild(deleteButton);

      // Add list item to the list
      taskList.appendChild(li);

      // Clear input
      taskInput.value = '';
    }

    // Event listener for button click
    addTaskButton.addEventListener('click', addTask);

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  </script>

</body>
</html>