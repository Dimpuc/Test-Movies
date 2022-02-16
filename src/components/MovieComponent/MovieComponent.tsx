import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie, getInfoMovies } from "../../redux/slices/moviesSlice";
import {
  SMoviesActorsBlock,
  SMoviesBlockBtn,
  SMoviesBtn,
  SMoviesCart,
  SMoviesCartContainer,
  SMoviesCartText,
  SMoviesTextBlock,
} from "./styled";

interface MovieComponentProps {
  movie: IMovies;
}

interface Actors {
  name: string;
  id: number;
}

export const MovieComponent: FC<MovieComponentProps> = (movie) => {
  const [detailedVisible, setDetailVisible] = useState(false);
  const dispatch = useDispatch();

  const getDetailedInfo = () => {
    dispatch(getInfoMovies({ id: movie.movie.id }));
  };

  const handleDeleteMovie = () => {
    dispatch(deleteMovie({ id: movie.movie.id }));
  };

  return (
    <SMoviesCart heightSize={detailedVisible ? 420 : 200}>
      <SMoviesCartContainer>
        <SMoviesTextBlock>
          <SMoviesCartText>Title: {movie.movie.title}</SMoviesCartText>
          <SMoviesCartText>Year: {movie.movie.year}</SMoviesCartText>
          <SMoviesCartText>Format: {movie.movie.format}</SMoviesCartText>
          {detailedVisible && (
            <SMoviesActorsBlock>
              <SMoviesCartText>Actors: </SMoviesCartText>
              {movie.movie.actors &&
                movie.movie.actors.map((info: Actors, index) => {
                  if (index + 1 === movie.movie.actors.length) {
                    return (
                      <SMoviesCartText key={info.id}>
                        {info.name}
                      </SMoviesCartText>
                    );
                  } else {
                    return (
                      <SMoviesCartText key={info.id}>
                        {info.name + "," + "\xa0"}
                      </SMoviesCartText>
                    );
                  }
                })}
            </SMoviesActorsBlock>
          )}
        </SMoviesTextBlock>

        <SMoviesBlockBtn>
          <SMoviesBtn
            color={"#C71C1F"}
            width={23}
            height={23}
            right={0}
            top={0}
            onClick={handleDeleteMovie}
          >
            x
          </SMoviesBtn>
          <SMoviesBtn
            color={"#0CB330"}
            width={90}
            height={20}
            bottom={0}
            right={0}
            onClick={() => {
              getDetailedInfo();
              setDetailVisible(!detailedVisible);
            }}
          >
            GET INFO
          </SMoviesBtn>
        </SMoviesBlockBtn>
      </SMoviesCartContainer>
    </SMoviesCart>
  );
};
