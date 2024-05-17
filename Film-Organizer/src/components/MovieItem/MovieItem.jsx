import React from "react";
import "./MovieItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../redux/favoriteSlice";

const MovieItem = ({ movie }) => {
  const { Title, Year, Poster } = movie;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addFavorite(movie));
  };
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={handleClick}
          type="button"
          className="movie-item__add-button"
        >
          Siyahıya əlavə et
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
