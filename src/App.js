import Banner from "./Banner";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <div className="todo-wrapper">
        <Banner />
        <TodoList />
      </div> 
    </div>
  );
}
