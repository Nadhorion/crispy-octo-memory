let taskList = [];
const list = document.querySelector('ul');

/**
 * Supplies parameters to TaskItem() and adds it to the bottom of
 * the list.
 */

function makeTaskItem() {

  let task = prompt("What do you need to do?", "");
  let isCompleted = false;
  let lineNumber = taskList.length + 1;
  let taskItem = new TaskItem(task, isCompleted, lineNumber);
  
  taskList.push( taskItem );
  renderTaskList();

}

/**
 * First deletes list children and then adds them back with any changes.
 * Refreshes list.
 */

function renderTaskList() {

  while (list.firstElementChild) {

    list.removeChild(list.firstElementChild);

  }


  for (let i = 0; i < taskList.length; i++) {

    let taskText = taskList[i].task;
    const li = document.createElement("li");
    li.textContent = taskText;
    list.append( li );

  }

}

/**
 * Constructs TaskItem instance, using supplied parameters, and 
 * returns it back to call.
 * 
 * @param {string} task 
 * @param {boolean} isCompleted 
 * @param {integer} lineNumber 
 */

function TaskItem(task, isCompleted, lineNumber) {

  this.task = task;
  this.isCompleted = isCompleted;
  this.lineNumber = lineNumber;

}