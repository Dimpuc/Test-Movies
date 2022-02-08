//@ts-nocheck
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { updateAccessToken } from "../redux/slices/authSlice";
import store from "../redux/store";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_CORE_API_URL,
});

instance.interceptors.request.use((request) => {
  request.headers["Authorization"] = `${token}`;
  return request;
});

const refresh = localStorage.getItem("refresh");

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) => {
  return instance
    .post(`/admin/refreshToken`, { token: refresh })
    .then((res) => {
      store.dispatch(updateAccessToken(res.data.accessToken));
      localStorage.setItem("refresh", res.data.refreshToken);
      failedRequest.response.config.headers["Authorization"] =
        "Bearer " + res.data.accessToken;
      return Promise.resolve();
    });
};

// Instantiate the interceptor
createAuthRefreshInterceptor(instance, refreshAuthLogic);

export { instance };
