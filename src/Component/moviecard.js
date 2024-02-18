import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
      <div className="movie-details">
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-info">Year: {movie.Year}</p>
        <p className="movie-info">Type: {movie.Type}</p>
        <p className="movie-info">IMDB ID: {movie.imdbID}</p>
      </div>
    </div>
  );
};

export default Moviecard;
