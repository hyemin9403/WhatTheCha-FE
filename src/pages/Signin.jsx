import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";

import { actionCreator as userActions } from "../redux/modules/user";
import { Background } from "../components/index";
import { Input, DivideLine } from "../elements/index";
import {
  SvgKakao,
  SvgGoogle,
  SvgFacebook,
  SvgTweeter,
  SvgApple,
  SvgLine,
} from "../img/login/svg_login";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const submitBtn = React.useRef();

  const changeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length <= 5) {
      e.currentTarget.parentNode.valid = false;
    } else {
      e.currentTarget.parentNode.valid = true;
    }
    console.log(e.currentTarget.parentNode.valid);
  };
  const changePwd = (e) => {
    setPwd(e.target.value);
    if (e.target.value.length <= 5) {
      e.currentTarget.parentNode.valid = false;
    } else {
      e.currentTarget.parentNode.valid = true;
    }
    console.log(e.currentTarget.parentNode.valid);
  };

  const login = () => {
    dispatch(userActions.loginFB(email, pwd));
  };

  React.useEffect(() => {
    if (email && pwd) {
      submitBtn.current.disabled = false;
    } else {
      submitBtn.current.disabled = true;
    }
  }, [email, pwd]);

  return (
    <StyleLogin>
      <Background />
      <div className="box-login">
        <div className="box-login-top">
          <div className="box-login-title">
            <h3>로그인</h3>
            <a href="#" rel="noreferrer noopener" target="_blank">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>
          <SignForm>
            <InputSign valid={null}>
              <Input
                _onChange={changeEmail}
                _type="email"
                _name="email"
                _autocomplete="off"
                _value={email}
                _placeholder="이메일 (example@gmail.com)"
              />
            </InputSign>
            <InputSign valid={null}>
              <Input
                _onChange={changePwd}
                _type="password"
                _name="password"
                _autocomplete="off"
                _value={pwd}
                _placeholder="비밀번호"
              />
            </InputSign>
          </SignForm>
          <button type="click" onClick={login} ref={submitBtn} className="btn btn-login">
            로그인
          </button>
        </div>
        <DivideLine />
        <div className="box-login-bottom">
          <h4>다른 방법으로 로그인하기</h4>
          <ul className="login-social">
            <li className="social-link">
              <button>
                <SvgKakao />
              </button>
            </li>
            <li className="social-link">
              <button>
                <SvgGoogle />
              </button>
            </li>
            <li className="social-link">
              <button>
                <SvgFacebook />
              </button>
            </li>
            <li className="social-link">
              <button>
                <SvgTweeter />
              </button>
            </li>
            <li className="social-link">
              <button>
                <SvgApple />
              </button>
            </li>
            <li className="social-link">
              <button>
                <SvgLine />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </StyleLogin>
  );
};
const StyleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .box-login {
    z-index: 1;
    width: 30rem;
  }
  .box-login-top {
    button {
      padding: 0;
      width: 100%;
      height: 4.8rem;
      background-color: #f82f62;
      border-radius: 4rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.01rem;
      text-align: center;
      line-height: 4.7rem;
      &:disabled {
        opacity: 0.3;
      }
    }
  }
  .box-login-title {
    margin: 0rem 0rem 1.4rem;
    display: flex;
    align-items: flex-start;
    h3 {
      flex: 1 1 0%;
      color: rgb(255, 255, 255);
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: -1px;
    }
    a {
      color: rgb(255, 255, 255);
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.4px;
      padding: 4px 0px 0px;
      opacity: 0.5;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .box-login-bottom {
    h4 {
      margin: 0 0 1.3rem;
      opacity: 0.6;
      font-size: 1.2rem;
      font-weight: 400;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
  }
  .login-social {
    display: flex;
    justify-content: space-between;
  }
  .social-link {
  }
  .btn-login{
    margin-top: 2.3rem;
  }
`;
const SignForm = styled.div``;
const InputSign = styled.div`
  position: relative;

  &:first-child {
    input {
      border-radius: 0.4rem 0.4rem 0rem 0rem;
    }
  }
  &:last-child {
    input {
      border-radius: 0rem 0rem 0.4rem 0.4rem;
    }
  }
  &:after {
    ${(props) =>
      props.valid === true
        ? css`
            content: "";
            display: inline-block;
            background: url("../img/login&signup/btn_check.svg");
            position: absolute;
            top: 50%;
            right: 1.2rem;
            bottom: auto;
            width: 2rem;
            height: 2rem;
            margin-top: -1rem;
          `
        : props.valid === false
        ? css`
            content: "";
            display: inline-block;
            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gSW52YWxpZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29ucy0vLVNldHRpbmdzLS8tSW52YWxpZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IngtY2lyY2xlLWYiIGZpbGw9IiNEQjQyNDEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4wNzA1NTU2LDE3LjA3IEMxMy4xODE2NjY3LDIwLjk1ODg4ODkgNi44MTgzMzMzMywyMC45NTg4ODg5IDIuOTI5NDQ0NDQsMTcuMDcgQy0wLjk1ODg4ODg4OSwxMy4xODE2NjY3IC0wLjk1ODg4ODg4OSw2LjgxODMzMzMzIDIuOTI5NDQ0NDQsMi45Mjk0NDQ0NCBDNi44MTgzMzMzMywtMC45NTg4ODg4ODkgMTMuMTgxNjY2NywtMC45NTg4ODg4ODkgMTcuMDcsMi45Mjk0NDQ0NCBDMjAuOTU4ODg4OSw2LjgxODMzMzMzIDIwLjk1ODg4ODksMTMuMTgxNjY2NyAxNy4wNzA1NTU2LDE3LjA3IEwxNy4wNzA1NTU2LDE3LjA3IFogTTEzLjg5Mzg4ODksNy42NjM4ODg4OSBMMTIuMzM2MTExMSw2LjEwNjExMTExIEwxMCw4LjQ0Mjc3Nzc4IEw3LjY2Mzg4ODg5LDYuMTA2MTExMTEgTDYuMTA2NjY2NjcsNy42NjM4ODg4OSBMOC40NDI3Nzc3OCwxMCBMNi4xMDY2NjY2NywxMi4zMzYxMTExIEw3LjY2Mzg4ODg5LDEzLjg5Mzg4ODkgTDEwLDExLjU1NzIyMjIgTDEyLjMzNjExMTEsMTMuODkzODg4OSBMMTMuODkzODg4OSwxMi4zMzYxMTExIEwxMS41NTcyMjIyLDEwIEwxMy44OTM4ODg5LDcuNjYzODg4ODkgTDEzLjg5Mzg4ODksNy42NjM4ODg4OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)
              no-repeat;
            position: absolute;
            top: 50%;
            right: 1.2rem;
            bottom: auto;
            width: 2rem;
            height: 2rem;
            margin-top: -1rem;
          `
        : css`
            display: none;
          `}
  }
`;
export default Signin;
