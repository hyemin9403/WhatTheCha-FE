import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components";
import { history } from "../redux/configureStore";

const Layout = ({ children }) => {
  const location = history.location.pathname
  console.log(location)
  return (
    <>
      <Wrapper _path={location}>{children}</Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  ${props => 
    props._path === '/video' 
    ? `
      padding-top: 0rem;
      padding-left: 0rem;
    ` : `
      padding-top: 7.2rem;
      padding-left: 24rem;
    `}
`;
