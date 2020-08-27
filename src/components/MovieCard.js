import React from 'react'
import  './MovieCard.css'

function MovieCard(props) {
    return (

    <div className="grid-item">
    <h1 className='title1'>{props.name}</h1>
    <h3 className="rate">Rate : {props.rate}</h3>
    <h5 className='text'>{props.description}</h5>
    <br/>
    </div>
    )
}
export default MovieCard

