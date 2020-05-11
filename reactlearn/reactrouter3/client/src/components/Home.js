import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:''
        }
    }

    updatename=(event)=>{
        this.setState({
            [event.target.name]:event.target.value

        })
    }
    render() {
        const {firstname,lastname} = this.state
        return (
            <div>
 <div>
          <input name="firstname" value={this.state.firstname} placeholder="Name" className="joinInput" type="text"  onChange={event=>this.updatename(event)} />
        </div>
        <div>
          <input name="lastname"  value={this.state.lastname} placeholder="Room" className="joinInput mt-20" type="text" onChange={event=>this.updatename(event)} />
        </div>      
        <Link onClick={e => (!firstname || !lastname) ? e.preventDefault() : null} to={`/name?name=${firstname}&last=${lastname}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>  
            </div>
        )
    }
}

export default Home
