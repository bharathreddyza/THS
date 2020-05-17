const initialState={
    messageVisibility:false,
    count:0,

}

const todoList ={
    todo:[]

}
let todono;

export const toggleReducer=(state=initialState,action)=>{
switch(action.type){
    case 'TOGGLE':
        return{...state,messageVisibility:!state.messageVisibility}

        default :
        return{...state}
}
}


  
  export const Counter=(state=initialState,action)=>{
  switch(action.type){
      case 'INCREMENT':
          return{...state,count:state.count+1}
          case 'DECREMENT' :
          return{...state,count:state.count-1}
          default :
          return {...state}
  }
  }

  export const Todos=(state=todoList,action)=>{
      switch(action.type){
          case 'ADDTOLIST':
              return{...state,
                newTodo:action.newTodo,
                 done:false,
                id:++todono}
        case 'REMOVEITEM':
            return state.filter(item=>item.id !== action.id)
            default :
            return state
      }
  }