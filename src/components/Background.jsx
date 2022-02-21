import React from 'react';
import styled from 'styled-components';

const Background = () => {
    return (
        <StyleBackground></StyleBackground>
    );
};
const StyleBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  background: url(https://an2-img.amz.wtchn.net/image/v2/ghW-8LvaINz5jb9fn4qaJw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME5EazVPRE00TWpZd01Ua3dOamc1TmlKOS4wdFRqQ3VmbTZVYm9FNEZsT283QmVYdUs2YkRnZXdCTGhYUUl5WUJiYWhv) center center / cover no-repeat;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 500ms ease 0s;
  &:after{
    content: "";
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 0;
    background: rgb(18, 18, 24);
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
`

export default Background;