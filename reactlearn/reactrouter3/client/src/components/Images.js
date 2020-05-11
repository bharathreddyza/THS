import React, { Component } from 'react'
import axios from 'axios'
export class Images extends Component {

   constructor(props){
       super(props)
       this.state={
           images:'',
           accessKey:'8AYVc4JwVXzlguab4IaRK8Y8dxDlQeRvKNbrUFtIBpw',
           Secretkey:"x4Uh-0D96Z5-EKBDNUz28UM0-H0vHHqK3RIZgtnkXBQ",
           search:"",
           result:[]
       }
       
   }
    componentDidMount(){
     }

  handleChange = (e)=>{
          this.setState({
              search:e.target.value
          })
  }  
  handleSubmit=(e)=>{
      e.preventDefault()
      console.log(this.state.search)
     axios.get(`https://api.unsplash.com/search/photos?page=1&query=${this.state.search}&client_id=${this.state.accessKey}`)
    .then((res)=>{
        console.log(res)
        this.setState({
            result:res.data.results
        })
    })
  }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} >
            <input onChange={this.handleChange} type="text" name="images" placeholder="search for images"/>
                <button type="submit">search</button>
            </form>
            <div >

             {this.state.result.map((image)=>{
                 return   <div>
                        <img style={{display:"inline"}} src={image.urls.small}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default Images
