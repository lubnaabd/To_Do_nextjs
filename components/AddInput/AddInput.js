import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./AddInput.module.css";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo == "") return;
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className={styles.addBtns} onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
