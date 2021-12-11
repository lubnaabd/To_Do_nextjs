import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import styles from "./TodoList.module.css";

function TodoList({ todos, setTodos }) {
  const updateTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className={styles.todolistContainer}>
      <div className={styles.todosContainer}>
        <div>
          {todos.map((todo, index) => (
            <div
              className={todo.completed ?styles.todoItemActive:styles.todoItem}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
}

export default TodoList;
