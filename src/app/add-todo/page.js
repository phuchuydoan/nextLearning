"use client";

import styles from "./add-todo.module.css";
import { addTodo } from "./action";
import { useActionState, useEffect } from "react";

const AddTodoPage = () => {
  const [state, formAction] = useActionState(addTodo, {
    message: null,
    success: null,
  });

  console.log("state", state);

  useEffect(() => {
    if(state.success) {
      alert(state.message) //toast success
    } else if (state.success === false && state.message) {
      alert(state.message) //toast error
    }
  }, [state])

  return (
    <div className={styles.container}>
      <h1>Them cong viec moi</h1>
      <form action={formAction} className={styles.formContainer}>
        <label htmlFor="todo" className={styles.label}>
          Ten cong viec:
        </label>
        <input
          type="text"
          id="todo"
          name="todo"
          // required
          className={styles.inputField}
        />
        <button className={styles.submitButton} type="submit">
          Them
        </button>
      </form>
    </div>
  );
};

export default AddTodoPage;
