import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";

import logo from "../img/header/logo.svg"
import { SvgHome, SvgFavor, SvgComple, SvgRelay, SvgEval } from "../img/nav_side/svg_side"

const Sidebar = () => {
  const is_login = useSelector((state) => state.user.is_login);

  if(is_login){
    return (
      <Nav>
        <button type="click" onClick={() => history.push('/browse/video')} className="nav-logo">
          <img src={logo} alt="왓챠 로고 이미지"/>
        </button>
        <Section>
          <ul>
            <li onClick={() => history.push('/browse/video')}>
              <SvgHome/>
              <span>홈</span>
            </li>
          </ul>
          <ul aria-label="보관함">
            <li onClick={() => history.push('/wishes')}>
              <SvgFavor/>
              <span>보고싶어요</span>
            </li>
            <li onClick={() => history.push('/watchings')}>
              <SvgRelay/>
              <span>이어보기</span>
            </li>
            <li onClick={() => history.push('/watched')}>
              <SvgComple/>
              <span>다 본 작품</span>
            </li>
            <li onClick={() => history.push('/ratings')}>
              <SvgEval/>
              <span>평가한 작품</span>
            </li>
          </ul>
        </Section>
      </Nav>
    )
  }
  return null;
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background: #141517;
  width: 24rem;
  height: 100%;
  border-right: 1px #1b1c1d solid;
  button{
    margin: 2.4rem 0 3rem 2.6rem;
    display: block;
  }
  .nav-logo{
    img{
      vertical-align: top;
      width: 88px;
      height: 26px;
    }
  }
`
const Section = styled.section`
  padding: 0 1.6rem;
  ul{
    margin: 0 0 1.6rem;
    &:before{
      content: attr(aria-label);
      color: #84868d;
      padding: 0 1.2rem 0.2rem;
      font-size: 1.2rem;
      font-weight: 400;
      -webkit-letter-spacing: 0rem;
      -moz-letter-spacing: 0rem;
      -ms-letter-spacing: 0rem;
      letter-spacing: 0rem;
      -webkit-text-decoration: none;
      text-decoration: none;
      line-height: 1.8rem;
    }
    li{
      padding: 0.8rem 1.2rem;
      width: 100%;
      display: -webkit-box;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      align-self: stretch;
      background: transparent;
      border: 0;
      border-radius: 0.8rem;
      font-size: 1.4rem;
      font-weight: 400;
      color: #d4d7db;
      text-decoration: none;
      letter-spacing: 0rem;
      //background: #303133;
      color: #fff;
      cursor: pointer;
      svg{
        margin: 0 1rem 0 0;
        width: 2rem;
        height: 2rem;
        path{
        }
      }
    }
  }
`
export default Sidebar;
