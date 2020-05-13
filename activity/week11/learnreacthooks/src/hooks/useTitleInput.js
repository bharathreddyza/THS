import{useState,useEffect} from 'react'
import React from 'react'

// creating a custom hook
//how the useState works under the hook 
// will accept initila state


export default function useTitleInput(initialValue) {
    const [value,setValue] = useState(initialValue)
        
    useEffect(()=>{
        document.title=value
    })
    return [value,setValue]
}


export {useTitleInput};