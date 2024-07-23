import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";
import styled from "styled-components";

function Todo({ todo, deleteTodo, toggleCompleted, toggleEditing, editTodo }) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <DivTodo className={`${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <StyledMdEdit
          onClick={() => {
            toggleEditing(todo.id);
          }}
        />
        <StyledMdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </DivTodo>
  );
}

// 定義樣式
const DivTodo = styled.div`
  background-color: ${props => props.theme.colors.brightBlue};
  height: 40px;
  padding: 0 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    cursor: pointer;
  }
`;

const StyledMdEdit = styled(MdEdit)`
cursor: pointer;
`

const StyledMdDelete = styled(MdDelete)`
cursor: pointer;
margin-left: 5px;
`

export default Todo;
