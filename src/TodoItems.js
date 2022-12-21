import {RiCloseCircleLine} from 'react-icons/ri'
import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'
import './css/TodoItems.css'

function TodoItems({ todos, completeTodo, deleteTodo }) {

    return todos.map((todo, index) => {
    return(
        <div classname={todo.isComplete ? 'todo-item complete' : 'todo-item'} key={index}>
            <ul className='todo-block'>
                <li className='icon' onClick={() => completeTodo(todo.id)}>
                    {!todo.isComplete ? <BiCheckbox /> : <BiCheckboxChecked />}
                </li>
                <li className='todo-content' key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </li>
                <li className='close-icon icon'>
                    <RiCloseCircleLine 
                        onClick={() => deleteTodo(todo.id)}
                    />
                </li>
            </ul>
        </div>
        )
    })
}

export default TodoItems