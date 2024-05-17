import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./FavoriteLink.css";
const FavoriteLink = () => {
  const { favoritesList } = useSelector((store) => store.favorites);
  const navigate = useNavigate();
  return (
    <>
      <div className="favorites">
        <ul className="favorites__list">
          {favoritesList.map((list) => {
            return (
              <li key={list.id}>
                <button
                  onClick={() => navigate(`/list/${list.id}`)}
                  className="favorites__list__item"
                >
                  {list.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default FavoriteLink;
