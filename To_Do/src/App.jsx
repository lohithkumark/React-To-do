import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {
  
  const [todoList, setTodoList] = useState([]);

  
  const [inputTask, setInputTask] = useState("");

  
  const addTask = () => {
    if (inputTask.trim() === "") {
      alert("Enter some task!");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      text: inputTask,
      completed: false,
    };

   
    setTodoList([...todoList, newTodo]);
    setInputTask("");
  };

  
  const deleteTask = (id) => {
    const newList = todoList.filter((t) => t.id !== id);
    setTodoList(newList);
  };

  
  const completeTask = (id) => {
    const updated = todoList.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTodoList(updated);
  };


  const editTask = (id, newValue) => {
    const updated = todoList.map((t) => {
      if (t.id === id) {
        return { ...t, text: newValue };
      }
      return t;
    });

    setTodoList(updated);
  };

  return (
    <div className="main">
      <Header />

      <div className="todo-box">
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your task..."
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ToDoList
          todoList={todoList}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
