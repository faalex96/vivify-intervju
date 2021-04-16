import movies from './movies.json';

export default class MovieService {
  static movieList = movies;
  static getMovies() {
    return this.movieList.length ? this.movieList : [];
  }

  static addMovie(newMovie) {
    this.movieList = [...this.movieList, newMovie];
  }

  static returnLastKey() {
    return this.movieList[this.movieList.length - 1].id;
  }

  static removeMovie(movieId) {
    let filteredList = this.movieList.filter(movie => {
      return movie.id !== movieId;
    });
    this.movieList = filteredList;
  }
}
