import React, {useState} from "react";

const initialState = [{
    id: Date.now(),
    title: '',
    director: '',
    metascore: '',
    stars: [],
}]

const UpdateMovie = () => {
const [movie, setMovie] = useState(initialState);


const handlePut = () => {
    
}




return(
        <>
        <form onSubmit={handlePut}>
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="director" placeholder="director"/>
        <input type="text" name="metascore" placeholder="metascore"/>
        <input type="text" name="stars" placeholder="stars"/>
        <button>Submit</button>
        </form>
        </>
    )
}

export default UpdateMovie;