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
import Corret from "../img/login&signup/btn_check.svg"
import Wrong from "../img/login&signup/btn_wrong.svg"

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [emailCheck, setEmailCheck] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const submitBtn = React.useRef();
  // 이메일 유효성 검사
  // const checkEmail = (e) => {
  //   const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  //   // 형식에 맞는 경우 true 리턴
  //   console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
  // }

  const changeEmail = (e) => {
    setEmail(e.target.value);
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    if (regExp.test(e.target.value)) {
      setEmailCheck(true);
    } else if(e.target.value.length === 0) {
      setEmailCheck("")
    } else{
      setEmailCheck(false);
    }
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    if (regExp.test(e.target.value)) {
      setPwdCheck(true);
    } else if(e.target.value.length === 0) {
      setPwdCheck("")
    } else{
      setPwdCheck(false);
    }
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
            <InputSign className={emailCheck === true ? "correct" : emailCheck === false ? "wrong" : ""}>
              <Input
                _onChange={changeEmail}
                _type="email"
                _name="email"
                _autocomplete="off"
                _value={email}
                _placeholder="이메일 (example@gmail.com)"
              />
            </InputSign>
            <InputSign className={pwdCheck === true ? "correct" : pwdCheck === false ? "wrong" : ""}>
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
  &.correct:after {
    content: "";
    display: inline-block;
    background: url(${Corret});
    position: absolute;
    top: 50%;
    right: 1.2rem;
    bottom: auto;
    width: 2rem;
    height: 2rem;
    margin-top: -1rem;
  }
  &.wrong:after {
    content: "";
    display: inline-block;
    background: url(${Wrong})
      no-repeat;
    position: absolute;
    top: 50%;
    right: 1.2rem;
    bottom: auto;
    width: 2rem;
    height: 2rem;
    margin-top: -1rem;
  }
`;
export default Signin;
