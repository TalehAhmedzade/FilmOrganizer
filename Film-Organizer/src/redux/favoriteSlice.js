import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
const initialState = {
  favoritesList: [],
  favoriteList: {},
  favorites: [],
  favoriteMovies: [],
  isLoading: false,
  error: false,
};

export const postRequestForList = createAsyncThunk(
  `add list`,
  async (request) => {
    const response = await axios.post(
      `https://acb-api.algoritmika.org/api/movies/list`,
      request,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const getMovieById = createAsyncThunk(`get movie by id`, async (id) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=2fd1f3f9`
  );
  return response.data;
});

export const getFavoritesListByParamsId = createAsyncThunk(
  `get list by params`,
  async (listId) => {
    const response = await axios.get(
      `https://acb-api.algoritmika.org/api/movies/list/${listId}`
    );

    return response.data;
  }
);

const favoriteSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearFavoriteMovies: (state) => {
      state.favoriteMovies = [];
    },
    addFavorite: (state, action) => {
      let isEqual = false;

      state.favorites.map((favorite) => {
        if (favorite.imdbID === action.payload.imdbID) isEqual = true;
      });
      isEqual
        ? console.log(`Bu kitab artiq elave edilib`)
        : (state.favorites = [...state.favorites, action.payload]);
      //sual ver niye Proxy{object} yaranir
    },
    deleteMovieInList: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postRequestForList.fulfilled, (state, action) => {
      state.favoritesList = [action.payload, ...state.favoritesList];
      state.favorites = [];
    }),
      builder.addCase(postRequestForList.rejected, (state, action) => {
        console.log(`POST sorgusu zamani xeta bas verdi`);
      }),
      builder.addCase(getMovieById.fulfilled, (state, action) => {
        state.favoriteMovies.push(action.payload);
        state.isLoading = false
      }),
      builder.addCase(getMovieById.pending,(state)=>{
        state.isLoading = true
      })
      builder.addCase(getFavoritesListByParamsId.fulfilled, (state, action) => {
        state.favoriteList = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(getFavoritesListByParamsId.pending, (state,action)=>{
        state.isLoading = true;
      })
  },
});
export const { addFavorite, deleteMovieInList, clearFavoriteMovies } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
