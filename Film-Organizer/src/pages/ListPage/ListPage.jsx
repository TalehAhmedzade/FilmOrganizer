import React, { useEffect } from "react";
import "./ListPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import {
  clearFavoriteMovies,
  getFavoritesListByParamsId,
  getMovieById,
} from "../../redux/favoriteSlice";

const ListPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { favoriteList, isLoading } = useSelector((store) => store.favorites);
  const { id } = params;
  useEffect(() => {
    dispatch(getFavoritesListByParamsId(id));
  }, []);

  useEffect(() => {
    favoriteList.movies?.map((movieId) => {
      dispatch(getMovieById(movieId));
    });
    return () => dispatch(clearFavoriteMovies());
  }, [id,favoriteList.movies]);

  //kinolarin gelmeyinde problem var

  const navigate = useNavigate();
  return (
    <>
      <button className="back-main" onClick={() => navigate(`/`)}>
        geri
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="list-page">
          <h1 className="list-page__title">{favoriteList.title}</h1>
          <ul>
            <MovieCard  moviesId={favoriteList.movies} />
          </ul>
        </div>
      )}
    </>
  );
};

export default ListPage;
