import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./MovieCard.css";

const MovieCard = () => {
  const imdbLink = `https://www.imdb.com/title/`;
  const { favoriteMovies, isLoading } = useSelector((store) => store.favorites);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-favorite">
          {favoriteMovies.map((favoriteMovie) => {
            return (
              <div key={favoriteMovie.imdbID} className="card-item">
                <img src={favoriteMovie.Poster} alt={favoriteMovie.Title} />
                <li key={favoriteMovie.imdbID}>
                  <a
                    key={favoriteMovie.imdbID}
                    href={imdbLink + favoriteMovie.imdbID}
                    target="_blank"
                  >
                    {favoriteMovie.Title} {favoriteMovie.Year}
                  </a>
                </li>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default MovieCard;
