import React from "react";
import {useEffect} from "react";

function Footer({ filtered, setFiltered, taskList, setTask,viewMode,setViewMode }) {


  useEffect(() => {
    switch(viewMode){
      case "all":
        setFiltered({filterTitle:"all",tasks:taskList});
        break;
      case "active":
        const activeTask = taskList.filter(item => item.taskStatus === "pending");
        setFiltered({filterTitle:"active",tasks:activeTask});
        break;
      case "completed":
        const completedTask = taskList.filter(item => item.taskStatus === "completed");
        setFiltered({filterTitle:"completed",tasks:completedTask});
        break;
    }
  },[taskList]); 

  const onChangeFilter = (e) => {
    const allFilterButton = [...document.querySelectorAll('li>a')];
    allFilterButton.forEach(item => item.classList = []);
    e.target.classList.add("selected");

    switch(e.target.name){
      case "all":
        setViewMode(e.target.name);
        setFiltered({filterTitle:"all",tasks:taskList});
        break;
      case "active":
        setViewMode(e.target.name);
        const activeTask = taskList.filter(item => item.taskStatus === "pending");
        setFiltered({filterTitle:"active",tasks:activeTask});
        break;
      case "completed":
        setViewMode(e.target.name);
        const completedTask = taskList.filter(item => item.taskStatus === "completed");
        setFiltered({filterTitle:"completed",tasks:completedTask});
        break;
    }
  }

  const onClearCompleted = () => {
    const activeTask = taskList.filter(item => item.taskStatus === "pending");
    setTask(activeTask);
  }


  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {
            taskList.filter((item) => item.taskStatus === "pending").length
          }
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={onChangeFilter} name="all">
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={onChangeFilter} name="active">Active</a>
        </li>
        <li>
          <a href="#/" onClick={onChangeFilter} name="completed">Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
    </footer>
  );
}

export default Footer;
