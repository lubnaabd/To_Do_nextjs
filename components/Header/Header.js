import React from "react";
import styles from "./Header.module.css";
import Banner from "../Banner/Banner";
export default function Header({ title }) {
  return (
    <div>
      <h1 className={styles.header}>{title}</h1>
    </div>
  );
}
