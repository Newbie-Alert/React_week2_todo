import "./App.css";
import Input from "./components/Input/";
import Modal from "./components/Modal/";
import TodoList from "./components/TodoList/";
import styled, { keyframes } from "styled-components";

const CompFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  25% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.5;
  }

  75% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 1280px;
  height: fit-content;
  margin: 4rem auto 0 auto;
  border: 1px solid black;

  animation: ${CompFade} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

function App() {
  return (
    <>
      <AppContainer>
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </AppContainer>
      <Modal />
    </>
  );
}

export default App;
