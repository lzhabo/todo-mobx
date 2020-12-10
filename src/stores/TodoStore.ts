import { action, computed, observable } from "mobx";
import { ITodo } from "../interfaces";
import RootStore from "./RootStore";
import { v4 as uuidv4 } from "uuid";

export default class TodoStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore, initState?: any) {
    if (initState != null) {
      this.todos = initState.todos ?? [];
    }
    this.rootStore = rootStore;
  }

  @computed get emptyTodoItem() {
    return {
      id: uuidv4(),
      title: "",
      description: "",
      completed: false,
    };
  }

  @observable todos: ITodo[] = [];

  @action
  add = () => {
    this.todos.push(this.emptyTodoItem);
  };
  @action
  remove = (id: string) => {
    const index = this.todos.findIndex((v) => v.id === id);
    this.todos.splice(index, 1);
  };
}
