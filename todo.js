'use strict';

const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0]; //addTaskTriggerでjs-addTask-triggerの一番目を取得、グローバルスコープ？
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0]; //同上
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0]; //同上

const removeTask = removeButton => { //関数removeTaskを定義、仮引数removeButton
  const targetTask = removeButton.closest('li'); //targetTaskを呼ぶとremoveButtonの最も近いli要素を返す
  addTaskTarget.removeChild(targetTask); //targetTask=削除ボタンに最も近いli要素を削除
};

const addTask = task => { //関数addTask、仮引数task
  const listItem = document.createElement('li'); //listItemはli要素を作る
  const removeButton = document.createElement('button'); //removeButtonはbutton要素を作る
  const completeButton = document.createElement('button'); //completeButtonはbutton要素を作る

	removeButton.innerText = '削除'; //removeButtonの中のテキストを削除に書き換える
  removeButton.addEventListener('click', () => removeTask(removeButton)); //removeButtonをクリックした時、removeTask(removeButton)の処理を行う＝削除ボタンに最も近いli要素を消す

  completeButton.innerText = '完了'; //completeButtonの中のテキストを完了に書き換える
  completeButton.addEventListener('click', () => completeTask(completeButton)); //completeButtonをクリックした時、completeTask(completeButton)の処理を行う＝・・・・

  listItem.innerText = task; //listItemの中のテキストをtask(変数？＝addTaskValue.value)に書き換える=テキストタイプに入力された値を代入
  
  listItem.append(removeButton); //listitemのお尻にremoveButtonを追加
  listItem.append(completeButton); //     〃    にcompleteButtonを追加
  addTaskTarget.appendChild(listItem); //addTaskTargetのお尻にlistitemを追加（li要素と上記２つのボタンの３要素）
  //appendは、
  //DOMだけではなくテキストノードも追加できる（Stringを渡すとテキストノードとして最後尾に追加される）
  //引数を複数渡せる（兄弟要素として追加される）
  //戻り値がない

  // listItem.append(removeButton);
  // addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener('click', event => { //addTaskTriggerをクリックした時に以下の処理をする(=タスク登録ボタンをクリックした時)
  const task = addTaskValue.value;  //task=addTaskValueに入力されたテキスト
  addTask(task);  //引数taskにaddTaskValue.valueを渡しながら関数addtaskの処理を行う=ボタン要素作成したりテキストを書き換えたりする
  addTaskValue.value = '';  //空白？を最後に代入することでリセットし、タスク登録ボタンをクリックする毎に新しく値を入力しやすくする
});

const completeTask = completeButton => { //関数completeTask、引数completeButton
  const targetTask = completeButton.closest('li'); //targetTaskでcomleteButtonに最も近いli要素を返す
  targetTask.classList.add('isComplate'); //targetTask=完了ボタンに最も近いli要素に"isComplete"クラスを付与する
  targetTask.removeChild(completeButton);  //targetTaskの子要素のcompleteButtonを削除
};



