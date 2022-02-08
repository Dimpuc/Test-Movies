import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./pages/LoginPage";
import { MoviesPage } from "./pages/MoviesPage";
import { MoviesPageList } from "./pages/MoviesPageList/MoviesPageList";
import { AppState } from "./redux/store";

function App() {
  const [refresh, setRefresh] = useState("");
  const accessToken = useSelector(
    (state: AppState) => state.authReducer.accessToken
  );

  const redirect = localStorage.getItem("token");

  useEffect(() => {
    const refresh = localStorage.getItem("token");
    if (refresh) {
      setRefresh(refresh);
    }

    // eslint-disable-next-line
  }, [refresh]);

  return (
    <Router>
      {redirect && redirect.length > 0 ? (
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <MoviesPage />
            </Route>
            <Route path="/moviesList">
              <MoviesPageList />
            </Route>
          </Switch>
        </>
      ) : (
        <LoginPage />
      )}
    </Router>
  );
}

export default App;
