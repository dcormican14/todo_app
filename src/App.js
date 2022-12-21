import Header from './Banner.js';
import './css/App.css';
import TodoList from './TodoList.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}
