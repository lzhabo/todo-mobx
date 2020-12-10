import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import CreateTodo from "@src/screens/RootScreen/CreateTodo";
import TodoItem from "@src/screens/RootScreen/TodoItem";
import { List } from "antd";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RootScreen: React.FC<IProps> = () => {
  const { todoStore } = useStores();
  return useObserver(() => (
    <Root>
      <List
        style={{ width: "100%" }}
        key={todoStore.todos.length}
        itemLayout="horizontal"
        dataSource={todoStore.todos}
        renderItem={(item) => <TodoItem todo={item} key={item.id} />}
      />
      <CreateTodo />
      {/*{todoStore.todos.map((v, i) => (*/}
      {/*  <TodoItem todo={v} key={i} />*/}
      {/*))}*/}
    </Root>
  ));
};
export default RootScreen;
