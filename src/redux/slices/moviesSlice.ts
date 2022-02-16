//@ts-nocheck
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { instance } from "../../libs/axios";
import { RequestErrors } from "../../types/enum";
import { AuthStates } from "../slices/authSlice";

export interface movieSliceState {
  movies: IMovies[];
  sortMovies: IMovies[];
  loading: AuthStates;
  error?: SerializedError;
}

const initialState = {
  movies: [],
  sortMovies: [],
  loading: AuthStates.IDLE,
  error: null,
};

export const createMovie = createAsyncThunk(
  "movie/create",
  async (credentials: any, thunkAPI) => {
    try {
      const {
        data: { error, data },
      } = await instance.post(`/movies`, credentials);
      if (!error) {
        thunkAPI.dispatch(addMovies(data));
      } else {
        if (error.code === RequestErrors.MOVIE_EXISTS) {
          alert("MOVIE EXISTS");
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getMoviesById = createAsyncThunk(
  "movie/getById",
  async (credentials: any, thunkAPI) => {
    try {
      const response = await instance.get(`/movies/${credentials.id}`);
      if (response?.status === 201) {
        console.log(response.data);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const uploadMovie = createAsyncThunk(
  "movie/upload",
  async (credentials: any, thunkAPI) => {
    try {
      const response = await instance.post(
        `/movies/import`,
        credentials.formData
      );
      if (response?.status === 200) {
        thunkAPI.dispatch(setUploadMovies(response.data.data));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movie/delete",
  async (credentials: any, thunkAPI) => {
    try {
      const { id } = credentials;
      const response = await instance.delete(`/movies/${id}`);
      if (response?.status === 200) {
        thunkAPI.dispatch(setDeleteMovie(id));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getInfoMovies = createAsyncThunk(
  "movie/getInfo",
  async (credentials: any, thunkAPI) => {
    try {
      const { id } = credentials;
      const response = await instance.get(`/movies/${id}`);
      if (response?.status === 200) {
        thunkAPI.dispatch(setMoviesInfo(response.data.data));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const SearchByMovieTitle = createAsyncThunk(
  "movie/SearchByMovieTitle",
  async (credentials: any, thunkAPI) => {
    let response;
    try {
      if (credentials.length > 0) {
        response = await instance.get(`/movies?title=${credentials}`);
      } else {
        response = await instance.get(`/movies`);
      }
      if (response?.status === 200) {
        thunkAPI.dispatch(setMovies(response.data.data));
      }
    } catch (error) {
      throw new Error(err);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = [...action.payload];
    },
    setUploadMovies: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
    },
    addMovies: (state, action: PayloadAction<IMovies[]>) => {
      console.log(action.payload, "action.payload");
      state.movies = [...state.movies, action.payload];
    },
    setDeleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setMoviesInfo: (state, action) => {
      const moviesId = action.payload.id;
      state.movies = state.movies.map((movie) =>
        movie.id === moviesId ? { ...action.payload } : movie
      );
    },
  },

  extraReducers: (builder) => {},
});

export const {
  setUploadMovies,
  setDeleteMovie,
  setMoviesInfo,
  addMovies,
  setMovies,
  setSortMovies,
} = moviesSlice.actions;
