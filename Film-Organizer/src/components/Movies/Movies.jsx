import React, { Component, useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../redux/filmSlice";

const Movies = () => {
  const { films, isLoading, error } = useSelector((store) => store.films);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms());
  }, []);
  return (
    <>
      <ul className="movies">
        {films?.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
