import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const POSTER_PATH = `http://image.tmdb.org/t/p/w185/`

export default function Movie(props) {
    return (
        <Link to={`/${props.id}`}>
          <Poster src={`${POSTER_PATH}${props.poster_path}`} />
        </Link>
    )
}


export const Poster =  styled.img`
box-shadow : 0 0 35px black;
width : 200px;
height: 250px
`