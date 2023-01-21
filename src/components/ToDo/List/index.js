import React from "react";

function List({ filtered, setFiltered, taskList, setTask }) {
  
  const onChangeDelete = (e) => {
    const updatedTaskList = taskList.filter((task) => task.taskTitle !== e.target.name);
    setTask(updatedTaskList);
  }

  const onCheck = (e) => {
    const updatedTaskList = taskList.map((task) => {
        if(e.target.name === task.taskTitle){
            if(task.taskStatus === "completed"){
                task.taskStatus = "pending"
            }else{
                task.taskStatus = "completed"
            }
        }
        return task
    })
    setTask(updatedTaskList);
  }

  
  const allCompleted = () => {
    const isAllCompleted = taskList.every((item) => item.taskStatus === "completed");

    if(isAllCompleted){
      const allpendingList = taskList.map((item) => {
        return {...item,taskStatus:"pending"}
      });
      setTask(allpendingList);
    }else{
      const allcompletedList = taskList.map((item) => {
        return {...item,taskStatus:"completed"}
      });
      setTask(allcompletedList);
    }
  }
  

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={allCompleted}/>
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">

        {filtered.tasks.map((item,index) => (
          <li key={`list-${index}`}className={item.taskStatus === "completed" ? "completed" : null}>
            <div className="view">
              <input 
                className="toggle" 
                type="checkbox" 
                onClick={onCheck} 
                name={item.taskTitle}
                checked = {item.taskStatus === "completed" ? true : false}
              />
              <label>{item.taskTitle}</label>
              <button className="destroy" name={item.taskTitle} onClick={onChangeDelete}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
