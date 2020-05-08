import React, { Component } from 'react'
import propTypes from 'prop-types'
export class AddTodo extends Component {

    state={
        title:''
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({
            title:''
        })
    }
    render() {
        return (
          <form 
          onSubmit={this.onSubmit}
           style={{display:'flex'}}>
              <input 
              style={{flex:'10',padding:"5px"}}
              type="text" 
              name="title" 
              placeholder="add todo"
              value={this.state.title}
              onChange={this.onChange}
              />
              
              <input 
              type="submit"
               value="submit"
               className="btn"
               style={{flex:'1'}}    
               />
          </form>
        )
    }
}
AddTodo.propTypes={
    todos:propTypes.array.isRequired ,
     
}
export default AddTodo
