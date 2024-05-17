import React, { Component, useState } from 'react';
import './SearchBox.css';
import { useDispatch } from 'react-redux';
import { getWantedMovie } from '../../redux/filmSlice';

const SearchBox =() => {
   const dispatch = useDispatch();
    
   const [state,setState] =  useState({
        searchLine: ''
    }
)

    const searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
   const { searchLine } = state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Ada görə axtar:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Məsələn, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                    onClick={()=> dispatch(getWantedMovie(searchLine))}
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Axtar
                    </button>
                </form>
            </div>
        );
    
}
 
export default SearchBox;