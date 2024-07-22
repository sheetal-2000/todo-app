import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-context";
import { useContext } from "react";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoDate={items.date}
          todoName={items.name}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
