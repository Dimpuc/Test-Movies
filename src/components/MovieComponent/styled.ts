import styled from "styled-components";

interface MoviesProps {
  heightSize: number;
}

interface MovieBtn {
  color: string;
  height: number;
  width: number;
  top?: number;
  right: number;
  bottom?: number;
}

export const SMoviesCart = styled.div<MoviesProps>`
  width: 320px;
  height: ${(props) => props.heightSize}px;
  border: 1px solid #bebebb;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 11px 8px 22px 0px rgba(34, 60, 80, 0.2);
`;

export const SMoviesCartContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

export const SMoviesTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const SMoviesCartText = styled.h3`
  margin: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SMoviesBlockBtn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 120px;
`;

export const SMoviesBtn = styled.button<MovieBtn>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: white;
  position: absolute;
  border: none;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  cursor: pointer;
`;

export const SMoviesActorsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
`;
