import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";

import { actionCreator as userActions } from "../redux/modules/user";
import { Background } from "../components/index";
import { Input } from '../elements';
import svg from "../img/signup/btn_radio_check.svg"

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePwd = (e) => {
    setPwd(e.target.value)
  }

  const submitBtn = React.useRef();
  const ids = ["age", "agree01", "agree02", "agree03", "choose"]
  const needIds = ["age", "agree01", "agree02", "agree03"]
  const [checkList, setCheckList] = React.useState([])

  const onChangeAll = (e) => {
    // 체크할 시 checkList id 값 전체 넣기, 체크 해제할 시 checkList 빈 배열 넣기
    setCheckList(e.target.checked ? ids : [])
  }
  const onChangeEach = (e, id) => {
      // 체크할 시 checkList id값 넣기
      if (e.target.checked) {
          setCheckList([...checkList, id])
          if(checkList.length === ids.length - 1){
            document.getElementById("all").checked = true
          }
      // 체크 해제할 시 checkList 해당 id값이 `아닌` 값만 배열에 넣기
      } else {
        setCheckList(checkList.filter((checkedId) => checkedId !== id));
        if(document.getElementById("all").checked){
          document.getElementById("all").checked = false
        }
      }
  }

  const signUp = () => {
    dispatch(userActions.signupFb(name, email, pwd))
  }
  
  React.useEffect(() => {
    if(checkList.length === ids.length){
      submitBtn.current.disabled = false;
    }else{
      submitBtn.current.disabled = true;
    }
  }, [checkList])

  return (
    <StyleLogin>
      <Background/>
      <div className="box-login">
        <div className="box-login-top">
          <div className="box-login-title">
            <h3>회원가입</h3>
          </div>
            <SignForm>
              <div className="input-sign" valid={null}>
                <Input 
                  _onChange={changeName}
                  _type="text" 
                  _name="name" 
                  _autocomplete="off" 
                  _value={name} 
                  _placeholder="이름 (2자 이상)" 
                  width="100%"
                />
              </div>
              <div className="input-sign" valid={null}>
                <Input 
                  _onChange={changeEmail}
                  _type="email" 
                  _name="email" 
                  _autocomplete="off" 
                  _value={email} 
                  _placeholder="이메일 (example@gmail.com)" 
                  width="100%"
                />
              </div>
              <div className="input-sign" valid={null}>
                <Input 
                  _onChange={changePwd}
                  _type="password" 
                  _name="password" 
                  _autocomplete="off" 
                  _value={pwd} 
                  _placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                  width="100%" 
                /> 
              </div>
            </SignForm>
        </div>
        <div className="box-login-bottom">
          <SignupCheck>
            <div className="signup-check-list">
              <label onChange={onChangeAll} checked={checkList.length === ids.length} className="signup-check-label" htmlFor="all">
                <input name="all" id="all" type="checkbox" className="signup-check-radio"/>
                <span className="signup-check-circle"></span>
                전체 약관에 동의합니다
              </label>
            </div>
            <div className="signup-check-list">
              <label className="signup-check-label" htmlFor={ids[0]}>
                <input onChange={(e) => onChangeEach(e, ids[0])} checked={checkList.includes(ids[0])} name={ids[0]} id={ids[0]} type="checkbox" className="signup-check-radio"/>
                <span className="signup-check-circle"></span>
                만 14세 이상입니다
              </label>
            </div>
            <div className="signup-check-list">
              <label className="signup-check-label" htmlFor={ids[1]}>
                <input onChange={(e) => onChangeEach(e, ids[1])} checked={checkList.includes(ids[1])} name={ids[1]} id={ids[1]} type="checkbox" className="signup-check-radio"/>
                <span className="signup-check-circle"></span>
                <button>왓챠피디아 서비스 이용약관</button>
                에 동의합니다 (필수)
              </label>
            </div>
            <div className="signup-check-list">
              <label className="signup-check-label" htmlFor={ids[2]}>
                <input onChange={(e) => onChangeEach(e, ids[2])} checked={checkList.includes(ids[2])} name={ids[2]} id={ids[2]} type="checkbox" className="signup-check-radio"/>
                <span className="signup-check-circle"></span>
                <button>왓챠피디아 서비스 이용약관</button>
                만 14세 이상입니다
              </label>
            </div>
            <div className="signup-check-list">
              <label className="signup-check-label" htmlFor={ids[3]}>
                <input onChange={(e) => onChangeEach(e, ids[3])} checked={checkList.includes(ids[3])} name={ids[3]} id={ids[3]} type="checkbox" className="signup-check-radio"/>
                <span className="signup-check-circle"></span>
                <button>개인정보 수집 및 이용에 대한 안내</button>
                에 동의합니다 (필수)
              </label>
            </div>
            <div className="signup-check-list">
              <label className="signup-check-label" htmlFor={ids[4]}>
                <input onChange={(e) => onChangeEach(e, ids[4])} checked={checkList.includes(ids[4])} name={ids[4]} id={ids[4]} type="checkbox" className="signup-check-radio"/>
                <span className="signup-check-circle"></span>
                <button>신작 알림 이벤트 정보 수신</button>
                에 동의합니다 (선택)
              </label>
            </div>
          </SignupCheck>
          <button onClick={signUp} ref={submitBtn} className="btn">계정생성하기</button>
          <p>결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</p>
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
  .box-login{
    z-index: 1;
    width: 30rem;
  }
  .box-login-top{
  }
  .box-login-title{
    margin: 0rem 0rem 1.4rem;
    display: flex;
    align-items: flex-start;
    h3{
      flex: 1 1 0%;
      color: rgb(255, 255, 255);
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: -1px;
    }
  }
  .box-login-bottom{
    p{
      color: #ffffff;
    }
    .btn{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 4.8rem;
      background-color: #F82F62;
      border-radius: 4.0rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: -0.01rem;
      text-align: center;
      line-height: 4.7rem;
      &:disabled {
        opacity: 0.3;
      }
    }
  }
`
const SignForm = styled.div`
    .input-sign{
      position: relative;

      &:first-child{
        input{
            border-radius: 0.4rem 0.4rem 0rem 0rem;
        }
      }
      &:last-child{
        input{
            border-radius: 0rem 0rem 0.4rem 0.4rem;
        }
      }
      &:after{
        ${props => props.valid === true ? css`
          content: "";
          display: inline-block;
          background: url("../img/login&signup/btn_check.svg");
          position: absolute;
          top: 50%;
          right: 1.2rem;
          bottom: auto;
          width: 2.0rem;
          height: 2.0rem;
          margin-top: -1.0rem;
        ` : props.valid === false 
        ? css`
          content: "";
          display: inline-block;
          background: url("../img/login&signup/btn_wrong.svg") no-repeat;
          position: absolute;
          top: 50%;
          right: 1.2rem;
          bottom: auto;
          width: 2.0rem;
          height: 2.0rem;
          margin-top: -1.0rem;
        ` : css`
          display: none;
        `}
      }
    }
`
const SignupCheck = styled.div`
  margin: 1.6rem 0rem 0rem;
    .signup-check-list{
      margin: 0.6rem 0rem;
    }
    .signup-check-label{
      display: block;
      position: relative;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.8rem;
      text-align: left;
      padding: 0rem 0rem 0rem 2.1rem;
      cursor: pointer;
      .signup-check-radio{
        display: none;
        &:checked + .signup-check-circle{
          background: rgb(248, 47, 98);
          border: 1px solid rgb(248, 47, 98);
          &:after{
            content: "";
            display: inline-block;
            position: absolute;
            top: 0rem;
            left: 0rem;
            background: url(${svg}) center center / contain no-repeat;
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
      .signup-check-circle{
        display: inline-block;
        position: absolute;
        top: 0.3rem;
        left: 0rem;
        width: 1.4rem;
        height: 1.4rem;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        &:after{
          content: "";
          display: inline-block;
          position: absolute;
          top: 0rem;
          left: 0rem;
          background-size: contain;
          width: 1.2rem;
          height: 1.2rem;
        }
      }
      button{
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        border: 0rem none transparent;
        outline: none 0rem;
        background: none;
        padding: 0rem;
        &:hover{
          text-decoration: underline;
        }
      }
    }
`
export default Signup;
