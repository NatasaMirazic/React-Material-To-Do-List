import React, {useState} from "react";
import CreateForm from "./CreateForm";
import Item from "./Item"
import {TodoItem} from "./models/TodoItem";
import {TodoService} from "./services/TodoService";
import { ReactSortable } from "react-sortablejs";

function TabList(props) {
  const service = new TodoService();
  const [items, setItems] = useState(service.getItems());

  const updateItems = (newItems) => {
    setItems(newItems);
    service.updateItems(newItems);
  }
  const addItem = (newItem) => {
    const newItems = [...items, new TodoItem(newItem)];
    updateItems(newItems);
  }

  const deleteItem = (itemForDelete) => {
    const newState = items.filter(item => item.id !== itemForDelete.id);
    updateItems(newState);
  }

  const filterItems = () => {
    return items.filter(item => !props.isToDoTab === item.isDone);
  }

  const doneItems = () => {
    return items.filter(item => item.isDone);
  }

  const todoItems = () => {
    return items.filter(item => !item.isDone);
  }

  const toggleItemIsDone = (item) => {
    const newItems = items.map(it => {
      if (it.id === item.id) {
        it.isDone = !it.isDone;
      }
      return it;
    })
    updateItems(newItems);
  }

  const updateSortedItems = (sortedItems) => {
    let otherItems = props.isToDoTab ? doneItems() : todoItems();
    const newItems = [
      ...sortedItems,
      ...otherItems
    ];
    updateItems(newItems);
  }

  return (
    <div>
      <ReactSortable list={filterItems()} setList={updateSortedItems} handle=".drag-button" animation="150">
        {filterItems().map(
          item => <Item key={item.id} item={item} onItemDeleted={deleteItem} onItemIsDoneChanged={toggleItemIsDone}/>
        )}
      </ReactSortable>
      <CreateForm isToDoTab={props.isToDoTab} onItemAdded={addItem}/>
    </div>
  )
}

export default TabList