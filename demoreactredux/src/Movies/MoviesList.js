import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import styled from 'styled-components'
// api - https://api.themoviedb.org/3/movie/popular?api_key=b01beee0a54ec1668f8ead66dcbdcf08
//fetch the data from the api 
//load it inside the component 
//render it

function MoviesList (props){
    const [movies,setMovies] = useState([])
    
    useEffect(async ()=>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b01beee0a54ec1668f8ead66dcbdcf08')
        setMovies(response.data.results)
    },[])

    return(
        <MovieGrid>
        {movies.map((movie)=> <Movie 
        key={movie.id} {...movie}/>)}
    </MovieGrid>
        
    )
}

export default MoviesList

// export default class MoviesList extends PureComponent {
//     constructor(props){
//         super(props)
//         this.state={
//             movies : [],
            
//         }

//     }
    
//    async componentDidMount() {
//        console.log("cdm in movielist");
       
//         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b01beee0a54ec1668f8ead66dcbdcf08')
//         this.setState({
//             movies : response.data.results
//         })
//     }
    
    
//     render() {
//         const {movies} = this.state
//         return (
//             <>
             
//             <MovieGrid>
//                 {movies.map((movie)=> <Movie 
//                 key={movie.id} {...movie}/>)}
//             </MovieGrid>
            
//             </>
//         )
//     }
// }

const MovieGrid = styled.div`
display : grid;
padding: 1rem;
grid-template-columns: repeat(6,1fr);
grid-row-gap:1rem;
`