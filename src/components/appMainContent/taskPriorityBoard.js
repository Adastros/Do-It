import { createElement, addClass } from "../helper/helper";

function taskPriorityBoard(boardHeader, priorityKey) {
  let taskPriorityBoard = createElement("div"),
    boardHeaderElement = createElement("h2"),
    linebreak = createElement("div"),
    taskList = createElement("div");

  boardHeaderElement.textContent = boardHeader + " Priority";

  // An identifier that is used when sorting through task data
  // to append tasks based on priority.
  taskPriorityBoard.dataset.priorityKey = priorityKey;

  addClass(taskList, "task-list");
  addClass(linebreak, "linebreak");
  addClass(taskPriorityBoard, "task-priority-board");

  taskPriorityBoard.append(boardHeaderElement, linebreak, taskList);

  return taskPriorityBoard;
}

export { taskPriorityBoard };
