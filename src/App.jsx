import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo, setListTOdo] = useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTOdo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTOdo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
        {/* <TodoList /> */}
      </div>
    </div>
  )
}

export default App
