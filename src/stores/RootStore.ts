import { RouterStore, TodoStore } from "./index";

export default class RootStore {
  public routerStore: RouterStore;
  public todoStore: TodoStore;

  constructor(initState?: any) {
    this.routerStore = new RouterStore(this);
    this.todoStore = new TodoStore(this, initState?.todoStore);

    console.log(this);
  }

  public serialize = () => ({
    todoStore: { todos: this.todoStore.todos },
  });
}
