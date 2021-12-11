import React, { useState } from "react";
import AddInput from "../../components/AddInput/AddInput";
import Header from "../../components/Header/Header";
import MetaData from "../../components/MetaData";
import TodoList from "../../components/TodoList/TodoList";
import styles from "./Todo.module.css";

export default function todos() {
  const [todos, setTodos] = useState([]);
  return (
    <div className={styles.todo}>
      <MetaData title={"Todo"}/>
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
