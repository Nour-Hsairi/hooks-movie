import React, { useState } from 'react';
function AddModal({addMovie, handleFunction}) {
    const [newMovie,setNewMovie]=useState({name:"", date:"", image:"", rate:0, link:""});
    const inputFunction=(e)=> {
        setNewMovie({...newMovie, [e.target.name]:e.target.value})
    }
    return (
        <div className="AddModal">
        <form>
            <div>
            <label>Movie's Name:</label>
            <input type="text" name="name" placeholder="Write the movie's name" required onChange={inputFunction} 
            />
            </div>
            <div>
            <label>Release Date:</label>
            <input type="date" name="date" placeholder="Put the year of production" required onChange={inputFunction}/>
            </div>
            <div>
            <label>Image URL:</label>
            <input type="text" name="image" placeholder="Paste the URL of a web image" required onChange={inputFunction}/>
            </div>
            <div>
            <label>Movie Rate:</label>
            <input type="number" name="rate" placeholder="Enter the movie's rate/5" required onChange={inputFunction}/>
            </div>
            <div>
            <label>Movie link:</label>
            <input type="text" name="link" placeholder="Paste the movie's link" required onChange={inputFunction}/>
            </div>
            <button className="btnsub" type="submit" 
            onClick={e=>{e.preventDefault();addMovie(newMovie); handleFunction()}}>ADD</button>
        </form>
        </div>
    )
}
export default AddModal;