import styled from "styled-components";

interface ModalPropsStyle {
  show?: string;
  transform?: number;
  opacity?: number;
  pointer?: string;
}

export const SModalWindowWrapper = styled.div<ModalPropsStyle>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointer};
`;

export const SModalWindow = styled.div<ModalPropsStyle>`
  width: 500px;
  height: 450px;
  background-color: white;
  transition: 0.4s all;
  transform: scale(${(props) => props.transform});
  border-radius: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
