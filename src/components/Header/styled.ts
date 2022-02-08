import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SHeader = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #fe724c; ;
`;

export const SHeaderTitle = styled.h3`
  color: white;
  font-size: 23px;
  margin-left: 50px;
`;

export const SHeaderLinkBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 70px;
  width: 200px;
`;

export const SHeaderLink = styled(NavLink)`
  color: white;
  font-weight: 300;
  font-size: 18px;
  text-decoration: none;
`;
