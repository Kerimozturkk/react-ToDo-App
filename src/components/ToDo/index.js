import {useEffect, useState} from 'react'
import './style.css';
import Header from './Header'
import List from './List'
import Footer from './Footer';


const filteredListInitial = {filterTitle:"all",tasks:[]}

const getTaskFromLS = () => {
  let task;
  if(localStorage.getItem("taskList") === null){
    task = []
  }else{
    task = JSON.parse(localStorage.getItem("taskList"));
  }
  return task;
}

function Todo() {

  const [taskList,setTaskList] = useState(getTaskFromLS);
  const [filteredList,setFilteredList] = useState(filteredListInitial);
  const [viewMode,setViewMode] = useState("all");

  useEffect(() => {
    localStorage.setItem('taskList',JSON.stringify(taskList));
  },[taskList]);

  return (
    <>
      <section className="todoapp">
        <Header taskList={taskList} addTask={setTaskList}/>
        <List filtered={filteredList} setFiltered={setFilteredList} taskList={taskList} setTask={setTaskList}/>
        <Footer filtered={filteredList} setFiltered={setFilteredList} taskList={taskList} setTask={setTaskList} viewMode={viewMode} setViewMode={setViewMode}/>
      </section>

      <footer className='info'>
        <p>Click to edit a todo</p>
        <p>Edited by <a href="https://www.linkedin.com/in/kerim-%C3%B6zt%C3%BCrk-4b3b3a22a/" target="_blank">Kerim Öztürk</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

    </>
  )
}

export default Todo
