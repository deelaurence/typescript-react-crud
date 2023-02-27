import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import { Todo } from './model';
import Todolist from './components/Todolist';
const App: React.FC = () => {
  const input = document.querySelector('input')
  const inputForm = document.querySelector('.form-input')
  const inputBtn = document.querySelector('.add')

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleDone = (e: React.FormEvent) => {
    // setTodos([...todos, { todo, id: Date.now(), isDone: true }])
    console.log(e.target);
  }
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { todo, id: Date.now(), isDone: false }]);
      setTodo("");
    }
    if (inputForm && inputBtn) {
      console.log('removing classses');

      inputForm.classList.remove('focused')
      inputBtn.classList.remove('btn-focused')
    }
  }
  return (
    <>

      < Input handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <Todolist todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
