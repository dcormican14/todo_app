import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItems from './TodoItems';

function TodoList() {
    const [todos, setTodos] = useState([]);
    

    const addTodo = (todo) => {
        // adds the new todo to the list
        setTodos([todo, ...todos]);
    };

    const deleteTodo = (id) => {
        // removes a Todo using its id
        let updatedTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }; 

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });

        setTodos(updatedTodos);
    };

    return (
        <div className='todo-list'> 
            <TodoForm onSubmit={addTodo}/>
            <TodoItems 
                todos={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default TodoList