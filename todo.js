'use strict';

const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];

const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  const complateButton = document.createElement('button');

	removeButton.innerText = '削除';
  removeButton.addEventListener('click', () => removeTask(removeButton));

  complateButton.innerText = '完了';
  complateButton.addEventListener('click', () => complateTask(complateButton));

  listItem.innerText = task;
  
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);

  listItem.append(complateButton);
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});

const complateTask = complateButton => {
  const targetTask = complateButton.closest('li');
  targetTask.classList.add('isComplate');
  targetTask.removeChild(complateButton);
};

