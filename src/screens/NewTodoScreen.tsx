import React from "react";
import { Button, Drawer, Form, Input, Space } from "antd";
import { useHistory } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";
import { useForm } from "antd/es/form/Form";
import { useStores } from "@stores";

interface IFormValues {
  title: string;
  description?: string;
}

const NewTodoScreen: React.FC = () => {
  const history = useHistory();
  const { todoStore } = useStores();
  const [form] = useForm();
  const handleFinish = (v: IFormValues) => {
    todoStore.todos.push({ ...todoStore.emptyTodoItem, ...v });
    close();
  };

  const close = () => history.push(ROUTES.ROOT);

  return (
    <Drawer
      title="Create new todo"
      placement="right"
      closable={false}
      onClose={close}
      visible
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
export default NewTodoScreen;
