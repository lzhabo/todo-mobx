import styled from "@emotion/styled";
import React from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";

interface IProps {
  // onFormSubmit: (todo: ITodo) => void;
}

const Root = styled.div`
  position: fixed;
  bottom: 64px;
  right: 64px;
`;

const CreateTodo: React.FC<IProps> = () => {
  const history = useHistory();
  return (
    <Root>
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => history.push(ROUTES.NEW)}
      >
        <PlusCircleFilled />
        Add todo
      </Button>
    </Root>
  );
};
export default CreateTodo;
