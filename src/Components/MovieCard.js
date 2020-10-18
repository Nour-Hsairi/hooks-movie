  
import React from 'react';
function MovieCard({movie}) {
    const r=[1,2,3,4,5];
    return (
    <div style={{padding:'10px'}}>
        <a href={movie.link} target='_blank' rel="noopener noreferrer" title={movie.name}>
            <img src={movie.image} alt={movie.name} width="200px" height="300px"></img>
        </a>
        <div>
            {r.map(el=><i className={movie.rate>=el? "fas fa-star yellow": "far fa-star"}></i>)}
        </div>
    </div>
    )
}
export default MovieCard;