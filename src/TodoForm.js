import React, {useState} from 'react'

const TodoForm = ({ addTodo }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(content);
        setContent('');
    };

    return ( 
        <div className="todo-submit-wrapper">
            <form onSubmit={handleSubmit} className="todo-submit">
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='todo-submit-field'></input>
                <input type="submit" value="+" className='todo-submit-button'></input>
            </form>
        </div> 
    );
}
 
export default TodoForm;
