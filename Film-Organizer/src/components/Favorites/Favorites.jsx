import React, { Component, useRef, useState } from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieInList,
  postRequestForList,
} from "../../redux/favoriteSlice";
import FavoriteLink from "../FavoriteLink/FavoriteLink";

const Favorites = () => {
  const inputRef = useRef();
  const { favorites, isLoading, error } = useSelector(
    (store) => store.favorites
  );
  const dispatch = useDispatch();
  const handleDeleteClick = (e) => {
    dispatch(deleteMovieInList(e.target.id));
  };

  const [requestState, setRequestState] = useState({
    title: "Yeni siyahı",
    movies: favorites.map((movie) => movie.imdbID),
  });
  const newRequest = favorites.map((movie) => movie.imdbID);
  const dispatchForPost = useDispatch();
  const handleClick = () => {
    if (inputRef.current.value.trim() !== `` && favorites.length !== 0) {
      const request = {
        title: requestState.title,
        movies: favorites.map((movie) => movie.imdbID),
      };

      dispatchForPost(postRequestForList(request));
      setRequestState({ ...requestState, title: "" });
    } else console.log(`ad ve ya film elave edilmeyib`);
  };

  const { favoritesList } = useSelector((store) => store.favorites);
  return (
    <>
      <div className="favorites">
        <input
          ref={inputRef}
          value={requestState.title}
          onChange={() =>
            setRequestState({ ...requestState, title: inputRef.current.value })
          }
          className="favorites__name"
        />
        <ul className="favorites__list">
          {favorites.map((item) => {
            return (
              <div className="favorites__list__item" key={item.imdbID}>
                <li key={item.imdbID}>
                  {item.Title} ({item.Year})
                </li>
                <button id={item.imdbID} onClick={handleDeleteClick}>
                  x
                </button>
              </div>
            );
          })}
        </ul>
        <button onClick={handleClick} type="button" className="favorites__save">
          Siyahını yadda saxla
        </button>
      </div>
      {favoritesList.length !== 0 && <FavoriteLink />}
    </>
  );
};
export default Favorites;
