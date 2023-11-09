import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import Input from "./components/Input/";
import Modal from "./components/Modal/";
import TodoList from "./components/TodoList/";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
        <Modal />
      </div>
    </>
  );
}

export default App;
