import React from 'react'
import Link from 'next/link'
import styles from "./TodoFooter.module.css";

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className={styles.todoFooter}>
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link href="/followers"><a>Followers</a></Link>
        </div>
    )
}

export default TodoFooter
