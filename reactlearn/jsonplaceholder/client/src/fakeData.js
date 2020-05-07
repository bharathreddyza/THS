import React from 'react'
import Loader from 'react-loader-spinner'
const SearchBar=(props)=>{
   
    return(
        <div>
        <form> 
        <input type='text'
           placeholder="search users"
           value={props.search}
           name='search'
    onChange={(e)=>props.updateSearch(e.target.value)}
    
        />
        <button
           
           
           >search</button>
        </form>
      
        </div>
    )
}

const FakeBody = (props) =>{
const {data} = props
    return(
        <div>
   {data.length <= 0 ? <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /> :
    data.map((user)=>(
        <div key={user.id}>
        <p>{user.id}</p>
        <h1>name:{user.name}</h1>
        <h2>username:{user.email}</h2>
        </div>

    ))}
        </div>
    )
}

export default class App1 extends React.Component{

constructor(props){
    super(props)
    this.state={
        data:[],
        search:''
    }
}

componentDidMount(){  
    this.updateSearch(this.state.search)
}

updateSearch=(user)=>{
    console.log(user)
    this.setState({
        search: user
    })

     fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
  .then(response => response.json())
  .then(json =>{
       this.setState({
    data:json
  }) 
   console.log(json)})
 
}

    render(){

         return(
            <div>
           <SearchBar 
                search={this.state.search}
             updateSearch={this.updateSearch}/>
           <FakeBody
               data={this.state.data}
           />
            </div>
        )
    }
}