import { createElement, addClass } from "../helper/helper";

function secondaryTaskBoard(boardHeader) {
  let secondaryTaskBoard = createElement("div"),
    boardHeaderElement = createElement("h2"),
    linebreak = createElement("div"),
    taskList = createElement("div");

  boardHeaderElement.textContent = boardHeader;

  addClass(taskList, "task-list");
  addClass(linebreak, "linebreak");
  addClass(secondaryTaskBoard, "secondary-task-board");

  secondaryTaskBoard.append(boardHeaderElement, linebreak, taskList);

  return secondaryTaskBoard;
}

export { secondaryTaskBoard };
