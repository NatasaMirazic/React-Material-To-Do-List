const KEY = 'items';

class TodoService {
  updateItems(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
  }

  getItems() {
    const items = JSON.parse(localStorage.getItem(KEY));
    return items || [];
  }
}

export {TodoService}