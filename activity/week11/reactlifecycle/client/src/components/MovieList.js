import React,{useState,useEffect} from 'react'
import Movie from './Movie'
import Poster from './Movie'
import styled from 'styled-components'
const MovieGrid =styled.div`
display : grid;
padding: 1rem;
grid-template-columns: repeat(6,1fr);
grid-row-gap:1rem;
`

export default function MovieList() {
    const [movies,setMovies] = useState([])

   const getMovies =async ()=>{
        const result =await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b01beee0a54ec1668f8ead66dcbdcf08')
        const data =await result.json()
        setMovies(data.results)
        console.log(data.results)
    }

      useEffect(()=>{
          getMovies()
      },[])
    return (
        <MovieGrid>
            {movies.length && movies.map((movie)=>{
             return   <Movie key={movie.id} {...movie} />
            })}
        </MovieGrid>
    )


        }