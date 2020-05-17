import React from 'react'
import {connect} from 'react-redux'
import {addToTodo} from './actions'
import {createStore} from 'redux'

function Todo(props){
     const {todo}= props
    return(
        <div>
        <form onSubmit={(e)=>store.dispatch({
            type:'ADDTOLIST',
            newTodo:e.target.value
        })}>
        <input
         placeholder='add to list..'
            />
            <button type="submit">add</button>
        </form>
            <div>
                <ul>
                    {todo.map((todo)=>(
                        <li>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    todo:state.Counter.todo
})

export default connect(mapStateToProps,null)(Todo)