import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
//this is responsible for creating a store in the app 
import {Provider} from 'react-redux'
import {rootReducer} from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
  )
console.log(store.getState())
 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>   ,
   document.getElementById('root')
);

 
serviceWorker.unregister();

// const hello =()=>({welcome:"hello how are you "})
// const store = createStore(hello)
// console.log(store.getState())
// console.log(store)

//reducer functions - they are just normal fucntion which will update the state based on action type
// const initialState ={
//   welcome:'HELLOINIT'
// }
// const greeting =(state=initialState,action)=>{
// switch(action.type){
//   case 'GREET':
//   return { ...state, welcome:'hello nice to meet you'}
//   case 'DONTGREET':
//   return {...state,welcome:`nort nice ${action.name}` ,name:action.name}
//   case 'FRIENDNAME':
//     return{...state,welcome:`hey ${action.friendname}`,friendname:action.friendname}
//   default:
//     return {...state}
// }
// }
// const store = createStore(greeting)
// console.log(store.getState())

// //dispatch fucntion will return action type object
// store.dispatch({
//   type:'GREET'
// })
// console.log(store.getState())

// store.dispatch({
//   type:'DONTGREET',
//   name:'bharath'
// })
// console.log(store.getState())

// store.dispatch({
//   type:"FRIENDNAME",
//   friendname:'JOHN'
// })
// console.log(store.getState())