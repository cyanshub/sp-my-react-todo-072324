import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  // 通常會使用資料庫的資料, 這邊只是示範資料
  const [todos, setTodos] = useState([
    {
      content: "去慢跑",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "整理筆記",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (content) => {
    // 使用展開運算子結合set方法, 加入新的陣列資料
    setTodos([...todos, { content, id: Math.random() }]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const toggleEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <>
      <div className="wrapper">
        <h1>待辦事項</h1>
        <CreateForm addTodo={addTodo} />
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              toggleEditing={toggleEditing}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default TodoWrapper;
