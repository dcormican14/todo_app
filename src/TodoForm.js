import React, {useState} from 'react'
import {TbPlaylistAdd} from 'react-icons/tb'
import './css/TodoForm.css'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleSubmit = (submission) => {
        // stops the page from refreshing
        submission.preventDefault();

        // saves input to display it
        props.onSubmit({
            id: Math.random(),
            text: input,
        })

        console.log(props.text);

        // clears entry field when submitted
        setInput('');
    };

    // creates input field for adding todos
    return (
        <form className='add-todo' onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Add a todo' 
                value={input} 
                name='text'
                className='input-field' 
                onChange={ submission => setInput(submission.target.value) }>
            </input>
            <button className='input-add'>
                <TbPlaylistAdd className='icon'/>
            </button>
        </form>
    )
}

export default TodoForm