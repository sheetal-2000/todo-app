import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-context";
function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return <p className={styles.welcome}>Enjoy your day.!</p>;
  }
}
export default WelcomeMessage;
