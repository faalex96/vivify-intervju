import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieDeleted, setMovieDeleted] = useState('');

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, [movieDeleted]);

  const handleDelete = movieId => {
    MovieService.removeMovie(movieId);
    setMovieDeleted(movieId);
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
