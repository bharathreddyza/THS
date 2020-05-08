import React, { Component,useState } from 'react'
 
function TodoI({todo,index,completeTodo,deleteTodo}){
    return(
        <div style={{textDecoration:todo.iscomplete? 'line-through':""}} className="todo">
          <h1>  {todo.todo} </h1>  
          <div>
              <button onClick={()=>completeTodo(index)}>complete</button>
              <button onClick={()=>deleteTodo(index)}>delete</button>

          </div>
        </div>
    )
}
function TodoForm({addTodo}){
    const[value,setvalue]= useState('');

const handleSubmit = (e)=>{
    e.preventDefault()
    if(!value) return;
    addTodo(value)
    setvalue('')

}

    return(
        <form onSubmit={handleSubmit}>
    <input type="text" className="input" value={value} onChange={e=> setvalue(e.target.value)}/>
        </form>
    )
}



function App2(){
    const [Todos,setTodos] = useState([
            {todo:'todo1',
            iscomplete:false},

            {todo:'todo2',
            iscomplete:false},

            {todo:'todo3',
            iscomplete:false},
        ])

        const addTodo =(todo)=>{
            console.log(todo)
      const NewTodos=[...Todos,{todo}]
      setTodos(NewTodos)
        }
        const completeTodo=(index)=>{
        const NewTodo =[...Todos];
        NewTodo[index].iscomplete=true
        setTodos(NewTodo)
        }

        const deleteTodo=(index)=>{
           const NewTodo=[...Todos]
            NewTodo.splice(index,1)
            setTodos(NewTodo)
        }
    return(
        <div className="App">
            <div className="todo-List">
                {Todos.map((todo,index)=>(
                     <TodoI deleteTodo={deleteTodo} completeTodo={completeTodo} key={index} todo={todo} index={index} />
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )

}

export default App2