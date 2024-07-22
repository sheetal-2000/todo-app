import { useRef, useState } from "react";
import { TbPlaylistAdd } from "react-icons/tb";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-context";
function AppTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const itemNameElement = useRef();
  const itemDateElement = useRef();
  const addNewItems = () => {
    let itemName = itemNameElement.current.value;
    let itemDate = itemDateElement.current.value;
    addNewItem(itemName, itemDate);
    itemNameElement.current.value = "";
    itemDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={itemNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={itemDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={addNewItems}
          >
            <TbPlaylistAdd></TbPlaylistAdd>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
