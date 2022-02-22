import React, { useRef, useState } from "react";
import styled from "styled-components";

const PlainGrid = (props) => {
  const list = props.list;
  return (
    <Flex>
      {list &&
        list.map((movie) => {
          return (
            <Slide key={movie.movieId}>
              <img src={movie.card_image} alt="" />
            </Slide>
          );
        })}
    </Flex>
  );
};

export default PlainGrid;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Slide = styled.div`
  position: relative;
  margin: 0 1rem 1rem 0;
  width: 18rem;
  height: 27rem;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;

    &:hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0);
      z-index: 100;
      display: block;
      opacity: 0.7;
    }
  }
`;
