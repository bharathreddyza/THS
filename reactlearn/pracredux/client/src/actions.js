//action creators --they are the fun

 
export function toggleReducer(){
   return{
       type:'TOGGLE'
   }
}

export function incrementCount(){
    return{
        type:'INCREMENT'
    }
}

export function decrementCount(){
    return{
        type:'DECREMENT'
    }
}

export function addToTodo(){
    return{
        type:'ADDTOLIST',
        newTodo:'',
     }
}