import React,{Component} from 'react'
import mMuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedBUtton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class PersonalDetails extends Component{
    
continue =e =>{
    e.preventDefault()
    this.props.nextStep()
}
back =e =>{
    e.preventDefault()
    this.props.previousStep()
}


    render(){
        const {values}= this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="enter personal details">  </AppBar>
                   
                  <br/>
                      <TextField
                     hintText="Enter your firstName"
                     floatingLabelText="firstname"
                     onChange={this.props.handleChange('firstName')}
                     defaultValue={values.firstName}
                     ></TextField>
                  <br/>

                      <TextField
                     hintText="Enter your lastName"
                     floatingLabelText="lastname"
                     onChange={this.props.handleChange('lastName')}
                     defaultValue={values.flastName}
                     ></TextField> 
                  <br/>

                    
                     <RaisedBUtton 
                     label="continue"
                     primary={true}
                     onClick={this.continue}
                     ></RaisedBUtton>
                   <RaisedBUtton 
                     label="go back"
                     primary={true}
                     onClick={this.back}
                     ></RaisedBUtton>
                  
                </React.Fragment>
            </MuiThemeProvider>
           )
    }

}

export default PersonalDetails