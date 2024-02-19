import { useDeferredValue, useState } from "react"
import { todoData } from "./TodoData"
export default function InputTodo(){
  const [value, setValue] = useState('')
  const defferedText = useDeferredValue(value)
  function addTodo(){
    const todo ={}
    todo.id = todoData.length
    todo.text = defferedText
    todo.completed = false
    todoData.push(todo)
    setValue('')
    console.log(todoData)
  }
  return(
    <div className="addTodo">
      <input value={value} onChange={e => setValue(e.target.value)}></input>
      <a href="#" onClick={addTodo}>Add Todo</a>
    </div>
  )
}

