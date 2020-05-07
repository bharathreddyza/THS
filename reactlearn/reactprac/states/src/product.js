import React from 'react'




class Products extends React.Component{
   


    render(){
        console.log(this.props.productList)


        return(
        <div>

        {this.props.productList.map((product)=>(
           
            <div key={product.id} style={{display:'flex'}}>
               <div> <img src={product.image} /> </div>
               <div>
                   <h1>{product.name}</h1>
                   <p>{product.desc}</p>
               </div>
               <div className="counter">
               <p>{product.votes}</p>
                   <button onClick={()=>this.props.incrementVotes(product)} >upvote</button>
               </div>
                </div>

        ))}
              

                </div>
        )
    }
}

export default Products