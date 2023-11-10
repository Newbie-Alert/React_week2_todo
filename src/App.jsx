import "./App.css";
import AppContainer from "./components/AppContainer";
import Input from "./components/Input/";
import Modal from "./components/Modal/";
import TodoList from "./components/TodoList/";

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
