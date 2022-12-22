import {RiCloseCircleLine} from 'react-icons/ri'
import {GiHoneycomb, GiDrippingHoney} from 'react-icons/gi'
import './css/TodoItems.css'

function TodoItems({ todos, completeTodo, deleteTodo }) {

    return todos.map((todo, index) => {
    return(
        <div className='todo-item' key={index}>
            <ul className='todo-block' >
                <li onClick={() => completeTodo(todo.id)}>
                    {!todo.isComplete ? <GiHoneycomb className='icon' /> : <GiDrippingHoney className='icon completed'/>}
                </li>
                <li className='todo-content' key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </li>
                <li className='close-icon'>
                    <RiCloseCircleLine 
                        onClick={() => deleteTodo(todo.id)}
                        className='icon'
                    />
                </li>
            </ul>
        </div>
        )
    })
}

export default TodoItems