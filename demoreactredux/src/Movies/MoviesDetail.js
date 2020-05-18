import React, { PureComponent } from 'react'
import axios from 'axios'
import {Poster} from './Movie'
import styled from 'styled-components'

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w500'
const POSTER_PATH = `http://image.tmdb.org/t/p/w185/`
export default class MoviesDetail extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            movie : {}
        }
        console.log("constructor : 1")
    }
    
    async componentDidMount() {
        console.log("componentdidmount" ,3)
        const response =await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b01beee0a54ec1668f8ead66dcbdcf08`)
        this.setState({
            movie : response.data
        })
    }
    
    componentWillUnmount(){
        console.log("unmount : 4")
        this.setState({
            movie: {}
        })
    }


    render() {
        const {movie}  = this.state
        console.log(" render : 2 " )
        console.log("movie in state",movie)
        if (!movie.id) return null
        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
                <MovieInfo>
                        <Poster src={`${POSTER_PATH}${movie.poster_path}`}/>
                        <div>
                            <h2>{movie.title}</h2>
                            <p>{movie.tagline}</p>
                        </div>
                </MovieInfo>
            </MovieWrapper>
        )
    }
}

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


