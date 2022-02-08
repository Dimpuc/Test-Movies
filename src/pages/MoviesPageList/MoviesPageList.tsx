import { useDispatch } from "react-redux";
import { MovieComponent } from "../../components/MovieComponent/MovieComponent";
import { SearchByMovieTitle, setMovies } from "../../redux/slices/moviesSlice";
import { useAppSelector } from "../../redux/store";
import {
  SMoviesList,
  SMoviesListContainer,
  SMoviesListPage,
  SMoviesToolBar,
  SToolBarBtn,
  SToolBarInput,
} from "./styled";

interface sortTitle {
  title: string;
}

export const MoviesPageList = () => {
  const movies = useAppSelector((state) => state.moviesReducer.movies);

  const dispatch = useDispatch();

  const sortByAlphabet = () => {
    const moviesListSorted = movies
      .slice()
      .sort(function (a: sortTitle, b: sortTitle) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    dispatch(setMovies(moviesListSorted));
  };

  const filter = (e: any) => {
    const searchTitle = e.target.value;
    dispatch(SearchByMovieTitle(searchTitle));
  };

  return (
    <SMoviesListPage>
      <SMoviesToolBar>
        <SToolBarBtn onClick={sortByAlphabet}>Sort By Alphabet</SToolBarBtn>
        <SToolBarInput
          placeholder="Search by Title"
          name="search"
          onChange={filter}
        />
      </SMoviesToolBar>
      <SMoviesListContainer>
        <SMoviesList>
          {movies &&
            movies.map((item) => <MovieComponent key={item} movie={item} />)}
        </SMoviesList>
      </SMoviesListContainer>
    </SMoviesListPage>
  );
};
