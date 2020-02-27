import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory, useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import Button from '@material-ui/core/Button';


function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState();
  const match = useRouteMatch();
  const history = useHistory();
  const { id } = useParams();
  
 
  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const handleUpdate = e => {
    e.preventDefault();
    history.push(`/update-movie/${movie.id}`);
 };

 const handleDelete = e => {
  e.preventDefault();
  axios
    .delete(`http://localhost:5000/api/movies/${id}`)
    .then(res => {
      setMovie(res.data);
      history.push('/');
    })
    .catch(err => console.log(err));
};



  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
      <Button variant="contained" color="primary" onClick={handleUpdate}>Update Movie</Button>
      <Button className="button" variant="contained" color="secondary" onClick={handleDelete}>Delete Movie</Button>
    </div>
  );
}

export default Movie;
