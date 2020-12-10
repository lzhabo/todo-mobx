import styled from "@emotion/styled";
import React from "react";
import { ITodo } from "@src/interfaces";
import { useObserver } from "mobx-react-lite";
import { Button, Checkbox, Input, List, Row, Space, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  TodoItemVMProvider,
  useTodoItemVM,
} from "@src/screens/RootScreen/TodoItem/TodoItemVM";
import { useStores } from "@stores";

interface IProps {
  todo: ITodo;
}

const Root = styled.div`
  display: flex;
  min-width: 600px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #282c34;
  margin: 10px;
`;

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const { todoStore } = useStores();
  return (
    <TodoItemVMProvider todoItem={todo} todoStore={todoStore}>
      <TodoItemImpl />
    </TodoItemVMProvider>
  );
};

const TodoItemImpl: React.FC = () => {
  const vm = useTodoItemVM();
  return useObserver(() => (
    <List.Item
      extra={[
        <Button
          icon={<EditOutlined />}
          onClick={() => (vm.editable = !vm.editable)}
        />,
        <div style={{ width: 8 }} />,
        <Button icon={<DeleteOutlined />} onClick={vm.remove} />,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Checkbox
            checked={vm.completed}
            onChange={(e) => (vm.completed = e.target.checked)}
          />
        }
        title={vm.title}
        description={vm.description}
      />
      {/*{vm.editable ? (*/}
      {/*  <div>*/}
      {/*    <Input*/}
      {/*      value={vm.title}*/}
      {/*      onChange={(e) => (vm.title = e.target.value)}*/}
      {/*    />*/}
      {/*    <Input.TextArea*/}
      {/*      value={vm.description}*/}
      {/*      onChange={(e) => (vm.description = e.target.value)}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*<Space align={"center"}>*/}
      {/*  <Checkbox*/}
      {/*    checked={vm.completed}*/}
      {/*    onChange={(e) => (vm.completed = e.target.checked)}*/}
      {/*  />*/}
      {/*  <Typography.Title level={4}>{vm.title}</Typography.Title>*/}
      {/*</Space>*/}
      {/*/!*)}*!/*/}
      {/*<Row>*/}
      {/*  <Button*/}
      {/*    icon={<EditOutlined />}*/}
      {/*    onClick={() => (vm.editable = !vm.editable)}*/}
      {/*  />*/}
      {/*  <Button icon={<DeleteOutlined />} onClick={vm.remove} />*/}
      {/*</Row>*/}
    </List.Item>
  ));
};

export default TodoItem;
