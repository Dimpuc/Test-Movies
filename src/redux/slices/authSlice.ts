//@ts-nocheck
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { instance } from "../../libs/axios";
import { HomeRoutes } from "../../types/enum";

export enum AuthStates {
  IDLE = "idle",
  LOADING = "loading",
}

export interface AuthSliceState {
  accessToken: string;
  loading: AuthStates;
  currentUser: Object;
  error?: SerializedError;
}

const initialState = {
  accessToken: "",
  loading: AuthStates.IDLE,
  currentUser: null,
  error: null,
};

export const userRegister = createAsyncThunk(
  "auth/register",
  async (credentials: any, thunkAPI) => {
    try {
      const response = await instance.post(`/users`, credentials);
      localStorage.setItem("token", response.data.token);
      thunkAPI.dispatch(updateAccessToken(response.data.token));
      return { currentUser: response.data };
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: any, thunkAPI) => {
    try {
      const response = await instance.post(`/admin/login`, credentials);
      thunkAPI.dispatch(updateAccessToken(response.data.accessToken));
      const res = await instance.get(`/admin/get`);
      localStorage.setItem("refresh", response.data.refreshToken);
      window.location.href = HomeRoutes.questionnaire;
      return { currentUser: res.data };
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_credentials, thunkAPI) => {
    try {
      // const state = thunkAPI.getState() as AppState;
      // await axios.post(`${process.env.REACT_APP_CORE_API_URL}/admin/logout`, null, {
      //   headers: { Authorization: `Bearer ${state.authReducer.accessToken}` },
      // });
      localStorage.removeItem("refresh");
      reset();
      window.location.href = HomeRoutes.home;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = AuthStates.LOADING;
    });
    builder.addCase(login.fulfilled, (state: AuthSliceState, action) => {
      state.currentUser = action.payload.currentUser;
      state.loading = AuthStates.IDLE;
    });
    builder.addCase(login.rejected, (state, action) => {
      state = { ...initialState, error: action.error };
      throw new Error(action.error.message);
    });

    builder.addCase(logout.pending, (state, action) => {
      state.loading = AuthStates.LOADING;
    });
    builder.addCase(logout.fulfilled, (_state) => initialState);
  },
});

export const { reset, updateAccessToken } = authSlice.actions;
