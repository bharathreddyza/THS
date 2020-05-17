import React from 'react'
import {connect} from 'react-redux'
    function Toogle(props) {
        const {messageVisibility,dispatch} = props
    return (
        <div>
        {messageVisibility &&  <h1>hi how are you </h1>}
       <button onClick={()=>dispatch({
           type:'TOGGLE'
       })} >Toggle</button>
        </div>
    )
}
const mapStateToProps = state =>({
    messageVisibility:state.toggleReducer.messageVisibility
})

export default connect(mapStateToProps,null)(Toogle)