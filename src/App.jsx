import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/";
import Input from "./components/Input/";
import Modal from "./components/Modal/";
import TodoList from "./components/TodoList/";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
        <Modal />
      </div>
    </>
  );
}

export default App;
