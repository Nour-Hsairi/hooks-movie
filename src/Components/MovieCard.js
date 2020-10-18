import React from 'react';
import { FaStar } from "react-icons/fa";
function MovieCard({movie}) {
    return (
    <div style={{padding:'10px'}}>
        <a href={movie.link} target='_blank' rel="noopener noreferrer" title={movie.name}>
            <img src={movie.image} alt={movie.name} width="200px" height="300px"></img>
        </a>
        <div className="Card" style={{fontFamily:'cursive'}}>
            <p style={{textDecoration:'underline'}}>{movie.name}</p>
            <p>Release Date: {movie.date}</p>
            <div>{[...Array(movie.rate)].map(el=>{return <FaStar key={Math.random()*1000} color="gold" /> } )}</div>
        </div>
    </div>
    )
}
export default MovieCard;