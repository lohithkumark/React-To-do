import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div className="list-box">
      <h2>Tasks</h2>

      {props.todoList.length === 0 ? (
        <p className="no-task">No tasks available</p>
      ) : (
        props.todoList.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              deleteTask={props.deleteTask}
              completeTask={props.completeTask}
              editTask={props.editTask}
            />
          );
        })
      )}
    </div>
  );
}

export default ToDoList;
