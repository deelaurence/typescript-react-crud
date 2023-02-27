import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props {

    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='list-cont'>
            <SingleTodo todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todolist
