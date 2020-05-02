import React,{Component} from 'react'
import mMuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedBUtton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class Userdetails extends Component{
    
continue =e =>{
    e.preventDefault()
    this.props.nextStep()
}

    render(){
        
        const {values}= this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="enter user details">  </AppBar>
                    <TextField
                     hintText="Enter your userName"
                     floatingLabelText="username"
                     onChange={this.props.handleChange('username')}
                     defaultValue={values.userName}
                     ></TextField>
                  <br/>
        


                     <TextField
                     hintText="Enter your email"
                     floatingLabelText="email"
                     onChange={this.props.handleChange('email')}
                     defaultValue={values.email}
                     ></TextField>
                     <br/>
                     <RaisedBUtton 
                     label="continue"
                     primary={true}
                     onClick={this.continue}
                     ></RaisedBUtton>
                  
                </React.Fragment>
            </MuiThemeProvider>
           )
    }

}

export default Userdetails