import styled from "styled-components";

export const SMoviesListPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SMoviesListContainer = styled.div`
  width: 80%;
`;

export const SMoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SMoviesToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  padding: 20px;
  border: 2px solid #fe724c;
  border-bottom-right-radius: 1em 5em;
  border-bottom-left-radius: 1em 5em;
`;

export const SToolBarBtn = styled.button`
  height: 30px;
  width: 140px;
  border: none;
  background-color: #fe724c;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const SToolBarInput = styled.input`
  width: 200px;
  height: 30px;
`;
