import React from "react";
import styled from "styled-components";

import "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  console.log(children);
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  padding-top: 7.2rem;
  padding-left: 24rem;
`;
