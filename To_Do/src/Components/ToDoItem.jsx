import { useState } from "react";

function ToDoItem(props) {
  const [editOn, setEditOn] = useState(false);
  const [editText, setEditText] = useState(props.item.text);

  const saveTask = () => {
    if (editText.trim() === "") {
      alert("Task should not be empty");
      return;
    }

    props.editTask(props.item.id, editText);
    setEditOn(false);
  };

  return (
    <div className="task-item">
      <div className="left-side">
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.completeTask(props.item.id)}
        />

        {!editOn ? (
          <span className={props.item.completed ? "strike" : ""}>
            {props.item.text}
          </span>
        ) : (
          <input
            className="edit-field"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        )}
      </div>

      <div className="btns">
        {!editOn ? (
          <button
            className="editbtn"
            onClick={() => {
              setEditOn(true);
            }}
          >
            Edit
          </button>
        ) : (
          <button className="savebtn" onClick={saveTask}>
            Save
          </button>
        )}

        <button
          className="delbtn"
          onClick={() => props.deleteTask(props.item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
