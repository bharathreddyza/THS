import React from 'react'
import axios from 'axios'
class Users extends React.Component{
   constructor(props){
       super(props)
       this.state ={
           data:{}
       }
   }

   async componentDidMount() {
       
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos/1')
       console.log(response)
    this.setState({
       data:response.data
   })
   }
    render(){
        return(
            <div>
                <h1>User Info</h1>
                {!this.state.data ? 'loading..' : <h1>{this.state.data.title}</h1>}
            </div>
        )
    }
}

export default Users