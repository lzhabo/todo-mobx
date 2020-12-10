import React from "react";
import TodoStore from "@stores/TodoStore";
import { useLocalStore } from "mobx-react-lite";
import { ITodo } from "../../../interfaces";
import { observable } from "mobx";
import useVM from "@stores/useVM";

const ctx = React.createContext<TodoItemVM | null>(null);

export const TodoItemVMProvider: React.FC<{
  todoItem: ITodo;
  todoStore: TodoStore;
}> = ({ children, todoItem, todoStore }) => {
  const store = useLocalStore(() => new TodoItemVM(todoStore, todoItem));
  return <ctx.Provider value={store}>{children}</ctx.Provider>;
};

export const useTodoItemVM = () => useVM(ctx);

class TodoItemVM {
  todoStore: TodoStore;
  @observable editable = false;

  @observable id: string;
  @observable title: string;
  @observable description?: string;
  @observable completed: boolean;

  constructor(todoStore: TodoStore, todoItem: ITodo) {
    this.todoStore = todoStore;

    this.id = todoItem.id;
    this.title = todoItem.title;
    this.description = todoItem.description;
    this.completed = todoItem.completed;
  }
  remove = () => {
    console.log(this.id);
    this.todoStore.remove(this.id);
  };
}
