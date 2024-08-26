import { createContext, useEffect, useState } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);
  const fetchItems = () => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length >= 0) {
          setTodoItems(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching todo items:", error);
      });
  };
  useEffect(() => {
    fetchItems();
  }, []);
  const addNewItem = (itemName, itemDate) => {
    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todoName: itemName, todoDate: itemDate }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchItems();
      })
      .catch((error) => console.log("Error adding item:", error));
  };
  const deleteItem = (itemName) => {
    fetch(`/api/items/${itemName}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchItems();
        } else {
          console.error("Failed to delete item");
        }
      })
      .catch((error) => console.log("Error deleting item:", error));
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
