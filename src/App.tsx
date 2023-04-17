import styled from "styled-components";
import HomePage from "./app/containers/HomePage";

const App = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
