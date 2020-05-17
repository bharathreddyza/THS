import React from 'react'
import {connect} from 'react-redux'
import {incrementCount,decrementCount} from './actions'
function Counter(props){
   const {count,incrementCount,decrementCount} = props

   return(
      <div>
          <h1>{count}</h1>
          <button onClick={incrementCount}>+</button>
           <button onClick={decrementCount}
          >-</button>

      </div>
   )
}

const mapStateToProps = state =>({
    count:state.Counter.count
})

export default connect(mapStateToProps,{incrementCount,decrementCount})(Counter)