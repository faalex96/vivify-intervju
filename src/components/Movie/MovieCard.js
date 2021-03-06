import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MovieService from '../../services/MovieService';
import StarRating from '../StarRating';

// import '../../styles/components/_moviCard.css';

const MovieCard = ({ movie, handleDelete }) => {
  const [currentRating, setCurrentRating] = useState(movie.avg);
  const [votes, setVotes] = useState({
    display: 'none',
    background: 'black',
    color: 'white',
  });

  const handleRatingMovie = newRating => {
    let avg = MovieService.updateMovieRating(movie.id, newRating);
    setCurrentRating(avg);
  };

  const handleMouseEnter = () => {
    let tempStyle = { ...votes };
    tempStyle.display = 'flex';
    setVotes(tempStyle);
  };

  const handleMouseLeave = () => {
    let tempStyle = { ...votes };
    tempStyle.display = 'none';
    setVotes(tempStyle);
  };

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={parseFloat(currentRating)} handleRatingMovie={handleRatingMovie} />
            </div>
            <div
              className="card-footer-badge float-right badge badge-primary badge-pill"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {movie.avg.toFixed(2)}
            </div>
            <div className="votes">
              <p style={votes}>{movie.rating.length} users have voted.</p>
            </div>
          </div>
          {movie.id > 500 ? (
            <button
              onClick={() => {
                handleDelete(movie.id);
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
