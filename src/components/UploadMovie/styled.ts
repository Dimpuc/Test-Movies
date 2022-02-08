import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFFFF;
  width: 550px;
  border-radius: 10px;
  position: relative;
  bottom: 11px;
  box-shadow: #0940a7 0px 4px 12px;
  margin-bottom: 10px;

  p {
    font-size: 23px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
  color: #353535;
  }
`;

export const Error = styled.div`
    color: #CF0000;
  font-size: 12px;
`;

export const Field = styled.div`
  width: 168px;
  position: relative;
  bottom: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonWrapper = styled.div`
  width: 100px;
  margin: 20px auto;
`;