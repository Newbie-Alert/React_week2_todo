import "./App.css";
import Input from "./components/Input/";
import Modal from "./components/Modal/";
import TodoList from "./components/TodoList/";

function App() {
  return (
    <>
      <div className="App">
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
        <Modal />
      </div>
    </>
  );
}

export default App;
