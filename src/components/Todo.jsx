import { MdDelete, MdEdit } from "react-icons/md";

function Todo({ todo, deleteTodo }) {
  return (
    <div className="todo">
      <p>{todo.content}</p>
      <div>
        <MdEdit style={{ cursor: "pointer" }} />
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
