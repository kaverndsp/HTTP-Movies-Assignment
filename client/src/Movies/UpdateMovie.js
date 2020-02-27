import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const initialState = {
   
    title: '',
    director: '',
    metascore: '',
    stars: [],
}

const UpdateMovie = () => {
const [movie, setMovie] = useState(initialState)
const { id } = useParams();
const history = useHistory();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(res => {
				setMovie(res.data);
			})
			.catch(err => console.log('error from form', err));
	}, [id]);

	const handleChanges = e => {
        
        setMovie({...movie, [e.target.name]: e.target.value});
        console.log(movie);
	};

	const handlePut = e => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/api/movies/${id}`, movie)
			.then(res => {
                const item = res.data;
                setMovie(item)
                
                // setMovie({
                //     title: item.title,
                //     director: item.director,
                //     metascore: item.metascore,
                //     stars: [item.stars],
                // });
				history.push(`/movies/${id}`);
			})
			.catch(err => console.log(err));
	};




return(
        <>
        <form className="form-container" onSubmit={handlePut}>
        <input className="form-content" type="text" name="title" placeholder="title" onChange={handleChanges} value={movie.title} />
        <input className="form-content" type="text" name="director" placeholder="director" onChange={handleChanges} value={movie.director}/>
        <input className="form-content" type="text" name="metascore" placeholder="metascore" onChange={handleChanges} value={movie.metascore}/>
        <input className="form-content" type="text" name="stars" placeholder="stars" onChange={handleChanges} value={movie.stars}/>
        <button >Submit</button>
        </form>
        </>
    )
}

export default UpdateMovie;