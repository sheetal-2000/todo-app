import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
let todoItemsReducer = (currState, action) => {
  let newTodoItems = currState;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currState,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currState.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
const TodoItemsContextProvider = ({ children }) => {
  const todoInitialItems = [
    {
      name: "Buy milk",
      date: "4/10/2023",
    },
    {
      name: "Go to college",
      date: "4/10/2023",
    },
    {
      name: "Go to home",
      date: "5/10/2023",
    },
  ];
  const [todoItems, dispatchAction] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchAction(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchAction(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
