import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteItem, toggleComplete }) => {
  console.log("todoList in TodoBoard:", todoList); // ⭐ 확인용
  if (!Array.isArray(todoList)) {
    return <div>할 일 목록이 없습니다</div>;
  }

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            deleteItem={deleteItem}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <h2>"No items"</h2>
      )}
    </div>
  );
};

export default TodoBoard;
