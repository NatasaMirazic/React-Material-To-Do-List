class TodoItem {
  title;
  id;
  isDone = false;

  constructor(title) {
    this.title = title;
    this.id = Math.floor(Math.random() * 1000);
  }
}

export {TodoItem}