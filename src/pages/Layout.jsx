import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding-top: 7.2rem;
  padding-left: 24rem;
`;
