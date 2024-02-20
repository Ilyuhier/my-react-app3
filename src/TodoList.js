import { useState } from "react"
import { todoData } from "./TodoData"

export default function TodoList(){
  const [todos,setTodos] = useState([])
  return(
    <ul className="todoList">
      {todoData.map(e=>CreateTodo(e))}
    </ul>
  )
}

function CreateTodo(e){
  const [status,setStatus] = useState(e.completed)
  function changeStatus(evt){
    const todoObj = todoData.find((e)=> e.id === +evt.target.id)
    console.log(todoObj)
    const newValue = !todoObj.completed
    todoObj.completed = newValue
    setStatus(!status)
    console.log(todoObj)
  }
  return (<li key={e.id} id={e.id} onClick={(e)=>changeStatus(e)}>
    {status? <s id={e.id}>{e.text}</s>: e.text}
    </li>)
}



// export default function TodoList(){
//   const [todos, setTodos] = useState(todoData)
//   const [value, setValue] = useState('')
//   const [version, setVersion] = useState(0)
  
  
//   const defferedText = value
//   function addTodo(){
//     const todo = {}
//     todo.id = (todoData.length+1)
//     todo.text = defferedText
//     todo.completed = false
//     setTodos((todos)=>[...todos, todo])
//     // todoData.push(todo)
//     console.log(todos)
//     setValue('')
//   } 
//   return(
//     <div className="addTodo">
//     <ul className="todoList" onClick={(e)=>{changeStatus(e) 
//       setVersion(version+1)}}>
//       {todos.map(e=>CreateTodo(e))}
//     </ul>
//     <input value={value} onChange={e => setValue(e.target.value)}></input>
//     <a href="#" onClick={addTodo}>Add Todo</a>
//     </div>
//   )
// }

// function CreateTodo(e){
//   // const [status, setStatus] = useState(e.completed)
  
//   // return (
//   //   <li key={e.id} id={e.id} onClick={(e)=>changeStatus(e)}>
//   //   {status? <s id={e.id}>{e.text}</s>: e.text}
//   //   </li>
//   //   )
//     return (
//       <li key={e.id} id={e.id} >
//       {e.completed? <s id={e.id}>{e.text}</s>: e.text}
//       </li>
//       )
// }

function changeStatus(evt){
  const todoObj = todoData.find((e)=> e.id === +evt.target.id)
  const newValue = !todoObj.completed
  todoObj.completed = newValue
  // setStatus(!status) 
}