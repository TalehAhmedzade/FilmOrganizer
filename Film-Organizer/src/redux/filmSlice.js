import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  films: [],
  isLoading: true,
  error: false
};

export const getFilms = createAsyncThunk(`get films`, async () => {

  const response = await axios.get(
    `https://www.omdbapi.com/?s=godfather&apikey=2fd1f3f9`
  );
  return response.data;
});

export const getWantedMovie = createAsyncThunk(`get wanted movies`, async (wantedFilmName)=>{
  const response = await axios.get(`https://www.omdbapi.com/?s=${wantedFilmName}&apikey=2fd1f3f9`)

  return response.data;
})




const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getFilms.fulfilled, (state,action)=>{
      state.films = action.payload.Search;
      state.isLoading = false;
      state.error = false;
    }),
    builder.addCase(getWantedMovie.fulfilled, (state,action)=>{
      state.films = action.payload.Search;
      state.isLoading = false;
      state.error = false;
    }),
    builder.addCase(getWantedMovie.rejected,(state,action)=>{
      state.error = true;
    })
  },
});


export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
