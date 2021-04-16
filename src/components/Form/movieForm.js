import React, { useState } from 'react';
import MovieService from '../../services/MovieService';

const validateForm = movieData => {
  for (let item in movieData) {
    if (movieData[item].length === 0) {
      return false;
    }
  }
  return true;
};

const findEmptyInput = movieData => {
  for (let item in movieData) {
    if (movieData[item].length === 0) {
      return item;
    }
  }
};

const MovieForm = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '',
    rating: 0.0,
  });
  const [inputErr, setInputErr] = useState({
    title: false,
    subtitle: false,
    description: false,
    imageUrl: false,
  });

  const handleChange = e => {
    let tempObj = {
      [e.target.name]: e.target.value,
    };
    setMovieData({ ...movieData, ...tempObj });
    // reset greske za input
    setInputErr({
      title: false,
      subtitle: false,
      description: false,
      imageUrl: false,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // provera za formu
    if (validateForm(movieData)) {
      // resenje za movie id i za dodavanje filma
      let key = MovieService.returnLastKey();
      let tempMovieData = { ...movieData };
      tempMovieData.id = key + 100;
      MovieService.addMovie(tempMovieData);

      // obrisi polja
      setMovieData({
        title: '',
        subtitle: '',
        description: '',
        imageUrl: '',
        rating: 0.0,
      });
    } else {
      let item = findEmptyInput(movieData);
      let tempObj = { ...inputErr };
      // setuj gresku za odgovarajuce polje
      tempObj[item] = true;
      setInputErr(tempObj);
    }
  };

  return (
    <form className="d-flex add-movie" onSubmit={handleSubmit}>
      <label>Movie Title:</label>
      <input type="text" name="title" value={movieData.title} className="add-movie__title" onChange={handleChange} />
      {inputErr.title ? <p>This filed needs input.</p> : null}
      <label>Movie subtitle</label>
      <input
        type="text"
        name="subtitle"
        value={movieData.subtitle}
        className="add-movie__subtitle"
        onChange={handleChange}
      />
      {inputErr.subtitle ? <p>This filed needs input.</p> : null}
      <label>Movie description:</label>
      <textarea
        name="description"
        value={movieData.description}
        className="add-movie__description"
        onChange={handleChange}
      />
      {inputErr.description ? <p>This field needs input.</p> : null}
      <label>Movie picture url:</label>
      <input
        type="text"
        name="imageUrl"
        value={movieData.imgUrl}
        className="add-movie__img-url"
        onChange={handleChange}
      />
      {inputErr.imageUrl ? <p>This field needs input.</p> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
