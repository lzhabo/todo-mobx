import React from "react";
import styled from "@emotion/styled";
import { Route } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";
import RootScreen from "@src/screens/RootScreen";
import NewTodoScreen from "@src/screens/NewTodoScreen";

interface IProps {}

const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 50px 20px 0 20px;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <Route path={ROUTES.ROOT}>
        <RootScreen />
      </Route>
      <Route path={ROUTES.NEW}>
        <NewTodoScreen />
      </Route>
    </Root>
  );
};

export default App;
