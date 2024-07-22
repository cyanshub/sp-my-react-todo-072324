import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleEditing, editTodo }) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
        style={{ cursor: "pointer" }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          onClick={() => {
            toggleEditing(todo.id);
          }}
          style={{ cursor: "pointer" }}
        />
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
