import { createElement, addClass } from "../generalHelper/generalHelper";
import "../../stylesheets/secondaryTaskBoard.css";

function secondaryTaskBoard(boardHeader) {
  let secondaryTaskBoard = createElement("div"),
    boardTitle = createElement("h2"),
    linebreak = createElement("div"),
    taskList = createElement("ul");

  boardTitle.textContent = boardHeader;

  addClass(taskList, "task-list");
  addClass(linebreak, "linebreak");
  addClass(boardTitle, "secondary-task-title");
  addClass(secondaryTaskBoard, "secondary-task-board");

  if (boardHeader.toLowerCase() === "today") {
    secondaryTaskBoard.append(taskList);
  } else {
    secondaryTaskBoard.append(boardTitle, linebreak, taskList);
  }

  return secondaryTaskBoard;
}

export { secondaryTaskBoard };
