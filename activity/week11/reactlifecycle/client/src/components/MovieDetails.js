 import React,{useState,useEffect} from 'react'
import {Poster} from './Movie'
import styled from 'styled-components'

const MovieWrapper = styled.div`
position : relative;
padding-top: 50vh;
background : url(${props=> props.backdrop}) no-repeat;
background-size :cover;
`
const MovieInfo = styled.div`
background:white;
text-align : left;
padding : 2rem 15%;
display : flex;
> div{
    margin-left : 20px;
}
img {
    position : relative;
    top : -10rem;
}
`
export default function MovieDetails(props) {
    const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w500'
    const POSTER_PATH = 'http://image.tmdb.org/t/p/w185'

    const [movie,setMovie] =useState({})
     const getMovie = async()=>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=b01beee0a54ec1668f8ead66dcbdcf08`)
      const data = await response.json()
     await setMovie(data)
     console.log(data)
    }
     useEffect(()=>{
         getMovie()
     },[])
    
    return (
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
            <MovieInfo>
               <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
               <div>
                   <h2>{movie.title}</h2>
                   <h2>{movie.tagline}</h2>
                   <h2>{movie.id}</h2>
                   <h2>Rating: {movie.vote_average}</h2>

               </div>
            </MovieInfo>
        </MovieWrapper>
    )
}


