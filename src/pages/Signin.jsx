import React from "react";
import styled from "styled-components";

import LoginInput from "../components/LoginInput"

const Signin = () => {
  return (
    <StyleLogin>
      <div className="background"></div>
      <div className="box-login">
        <div className="box-login-top">
          <div>
            <h3>로그인</h3>
            <a href="#" rel="noreferrer noopener" target="_blank">비밀번호를 잊어버리셨나요?</a>
          </div>
          <div className="">
            <LoginInput/>
          </div>
          <button className="btn">로그인</button>
        </div>
        <div className="box-login-bottom">
          <h4>다른 방법으로 로그인하기</h4>
          <ul>
            <li>
              <a href="" rel="noreferrer noopener" target="_blank"></a>
            </li>
            <li>
              <a href="" rel="noreferrer noopener" target="_blank"></a>
            </li>
            <li>
              <a href="" rel="noreferrer noopener" target="_blank"></a>
            </li>
            <li>
              <a href="" rel="noreferrer noopener" target="_blank"></a>
            </li>
            <li>
              <a href="" rel="noreferrer noopener" target="_blank"></a>
            </li>
            <li>
              <a href="" rel="noreferrer noopener" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    </StyleLogin>
  )
};
const StyleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .background{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 0;
    background: url(https://an2-img.amz.wtchn.net/image/v2/ghW-8LvaINz5jb9fn4qaJw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME5EazVPRE00TWpZd01Ua3dOamc1TmlKOS4wdFRqQ3VmbTZVYm9FNEZsT283QmVYdUs2YkRnZXdCTGhYUUl5WUJiYWhv) center center / cover no-repeat;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 500ms ease 0s;
  }
  .box-login{
    z-index: 1;
  }
`
export default Signin;
