import React, { useState, useEffect } from 'react'
import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'
import {TiDeleteOutline} from 'react-icons/ti'
import uuid from 'react-uuid'
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const persistedTodos = JSON.parse(localStorage.getItem('TODO_LIST_PERSISTED'));
        if (persistedTodos !== null) return persistedTodos;
        return [];
    });

    useEffect(() => {
        localStorage.setItem('TODO_LIST_PERSISTED', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (content) => {
        setTodos([{content, id: uuid(), completed: false}, ...todos]);
    };

    const completeTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }

    const delTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return ( 
        <div className="todo-list-wrapper">
            <TodoForm addTodo = {addTodo} />
            <ul className="todo-list">
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} className="todo-element">
                            {todo.completed ? <BiCheckboxChecked className="icons" onClick={() => completeTodo(todo.id)}/> : <BiCheckbox className="icons" onClick={() => completeTodo(todo.id)}/>}
                            <p  className="todo-content" 
                                onClick={() => completeTodo(todo.id)} 
                                style={todo.completed ? {"text-decoration": "line-through", color: "#aaa"} : {}}>
                                {todo.content}
                            </p>
                            <TiDeleteOutline className="icons" onClick={() => delTodo(todo.id)}/>
                        </li>
                    );
                })}
            </ul>
        </div>
     );
}
 
export default TodoList;
