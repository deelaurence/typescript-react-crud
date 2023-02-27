import React from 'react'
import { useState } from 'react'
import { Todo } from '../model'
import '../App.css'
interface Props {
    // mapped: Todo[]
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTodo: React.FC<Props> = ({ todos, setTodos }) => {
    const input = document.querySelector('input')
    const inputForm = document.querySelector('.form-input')
    const inputBtn = document.querySelector('.add')

    const [holdEdit, setHoldEdit] = useState<string>('')
    const handleDelete = (id: number) => {
        const filtered = todos.filter(filtering => {
            console.log(!filtering);
            console.log(filtering.todo);
            return id != filtering.id

        })
        console.log(filtered);

        setTodos(
            filtered
        )
    }
    let edited: string;
    const handleEdit = (id: number) => {
        const filtered = todos.filter(filtering => {
            console.log(!filtering);
            console.log(filtering.todo);

            // setTimeout(() => {

            // }, 1000);
            return id === filtering.id
            // console.log(filtering.id == e.target.id);

            return !filtering

        })
        console.log(filtered);

        setHoldEdit(filtered[0].todo)
        edited = filtered[0].todo
        console.log(filtered[0].todo);
        console.log(holdEdit);

        if (input && inputForm && inputBtn) {

            inputForm.classList.add('focused')
            inputBtn.classList.add('btn-focused')
            // setTimeout(() => {

            //     handleDelete(filtered[0].id)
            //     input.value = edited
            // }, 5000);
            console.log(holdEdit);
            input.value = edited

        }
    }
    const handleDone = (id: number) => {
        const filtered = todos.filter((filt) => {
            return filt.id === id
        })

        let newArray: Array<{ isDone: boolean; todo: string; id: number }> = [];
        todos.map((single) => {
            console.log(single);

            if (id == single.id) {
                single.isDone = !single.isDone
            }
            newArray.push(single)
            setTodos(
                newArray
            )
        })

    }
    return (
        <div>
            {todos.map((singleTodo) =>

            (<div className={singleTodo.isDone ? "single complete-card" : "single"} key={singleTodo.id}>
                <button className='completed' onClick={() => { handleDone(singleTodo.id) }}>{singleTodo.isDone ? 'NOT DONE' : "DONE"}</button>
                <button className='delete' onClick={() => { handleDelete(singleTodo.id) }}>DELETE</button>
                <button className='edit' onClick={() => { handleEdit(singleTodo.id) }}>EDIT</button>
                <h3 className={singleTodo.isDone ? 'done' : ''}  >{singleTodo.todo}</h3>
            </div>
            ))}

        </div>
    )
}

export default SingleTodo
