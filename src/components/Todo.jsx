import { MdDelete, MdEdit } from "react-icons/md";

function Todo({ todo }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div>
        <MdEdit style={{ cursor: "pointer" }} />
        <MdDelete style={{ cursor: "pointer", marginLeft: '5px' }} />
      </div>
    </div>
  );
}

export default Todo;
