import { useEffect, useState } from "react";

const initialValue = { taskTitle: "", taskStatus: "" };

function Header({taskList,addTask}) {
  
  const [form, setForm] = useState(initialValue);
  useEffect(() => {
    setForm(initialValue);
  },[taskList]);

  useEffect(() => {
    window.addEventListener('keydown',onSubmitWithEnter)

    return () => {
      window.removeEventListener('keydown',onSubmitWithEnter)
    }
  })

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value, taskStatus: "pending" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onSubmitWithEnter = (e) => {
    if(e.keyCode === 13){
      const spacelessTask = form.taskTitle.replace(/ /g,'');
      if(spacelessTask === ""){
        alert("Napıyon aq görev girmedin !!!");
        setForm(initialValue);
      }else{
        addTask([...taskList,form]);
      }
    }
    
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          name="taskTitle"
          value={form.taskTitle}
          onChange={onChangeInput}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;
