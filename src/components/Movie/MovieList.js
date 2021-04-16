import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const GetMovies = ({ movies, handleDelete }) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} handleDelete={handleDelete} />
    ))}
  </div>
);

const MovieList = ({ movies, handleDelete }) => <div>{<GetMovies movies={movies} handleDelete={handleDelete} />}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
