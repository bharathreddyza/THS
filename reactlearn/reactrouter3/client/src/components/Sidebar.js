import React, { Component } from 'react'
import {Link,Route, Router} from 'react-router-dom'
import Dashboard from './Dashboard'
 import Home from './Home'
import Products from './Products'
const data=[
    {
        path :'/sidebar',
        main :()=> <Home/>,
        side :()=><h1>Home Side</h1>,
        exact:true
    },
    {
        path :'/sidebar/products',
        main :()=> <Products/>,
        side :()=><h1>Products Side</h1>,
     },
    {
        path :'/sidebar/dashboard',
        main :()=> <Dashboard/>,
        side :()=><h1>Dashboard Side</h1>,
     }

]

export class Sidebar extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <div style={{backgroundColor:'#f5f5f5',color:'black',cursor:'pointer',width:'200px'}}>
            <Link to='/sidebar/'>Home</Link>
            <Link to='/sidebar/Products'>Products</Link>
            <Link to='/sidebar/dashboard'>Dashboard</Link>
             
             {
                 data.map((data)=>{
                     return <Route
                       path={data.path}
                       exact={data.exact}
                       component={data.side}
                     
                      />
                 })
             }
            
                </div>

                <div>
                    {data.map((data)=>{
                        return <Route 
                            path={data.path}
                            component={data.main}
                            exact={data.exact}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Sidebar
