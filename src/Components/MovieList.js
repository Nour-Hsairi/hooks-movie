import React from 'react';
function MovieList({movies, searchByName, searchByRate}) {
    return (
        <div>
        <div className="scroller" style={{minWidth:300, height:"320px", border:'4px solid black', margin:10}}>
            <input type="text" placeholder="Movie's name" className="search" 
            style={{fontFamily:'cursive'}} 
            onChange={e=>searchByName(e.target.value)}></input>
            <ul>
                {movies.map(el=><li><a href={el.link} target="_blank" rel="noopener noreferrer">{el.name}</a></li>)}
            </ul>
        </div>
        <div className="scroller" style={{minWidth:300, height:"300px", border:'4px solid black', margin:10}}>
            <input type="number" placeholder="Movie's rate/5" className="search" 
            style={{fontFamily:'cursive'}}
            onChange={e=>searchByRate(e.target.value)}></input>
        </div>
        </div>
    ) 
}
export default MovieList;