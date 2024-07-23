import { useState } from "react";
import styled from "styled-components";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <FormCreateForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">加入</button>
    </FormCreateForm>
  );
}

// 撰寫樣式
const FormCreateForm = styled.form`
  height: 40px;
  width: 100%;
  margin: 25px 0px;
  border: 1px solid ${props => props.theme.colors.brightBlue};
  display: flex;

  & > input {
    outline: none;
    border: none;
    background: none;
    color: white;
    width: 100%;  /* 盡量讓放大文字 */
    height: 100%; /* 盡量讓放大文字 */
    padding-left: 10px;
  }

  & > button {
    border: none;
    background-color: ${props => props.theme.colors.brightBlue};
    color: white;
    width: 50px;
    height: 100%;
    cursor: pointer;
  }
`;




export default CreateForm;
