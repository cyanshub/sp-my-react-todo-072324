import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  // 通常會使用資料庫的資料, 這邊只是示範資料
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random() },
    { content: "寫作業", id: Math.random() },
  ]);

  const addTodo = (content) => {
    // 使用展開運算子結合set方法, 加入新的陣列資料
    setTodos([...todos, { content, id: Math.random() }]);
  };

  return (
    <>
      <div className="wrapper">
        <h1>待辦事項</h1>
        <CreateForm addTodo={addTodo} />
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo.content} />;
        })}
      </div>
    </>
  );
}

export default TodoWrapper;
