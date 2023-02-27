import React from 'react'
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const Input: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (

        <div className='form-input'>
            <form onSubmit={handleAdd} className='input' action="">
                <input

                    type="input"
                    placeholder='input task..'
                    value={todo}
                    onChange={
                        (e) => setTodo(e.target.value)
                    }
                />
                <button className='add' type='submit'>
                    ADD
                </button>

            </form>
        </div>
    )
}

export default Input
