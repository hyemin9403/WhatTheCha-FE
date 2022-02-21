import React from "react";
import styled from "styled-components"
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import logo from "../img/header/logo.svg";

const Header = (props) => {

  const is_login = useSelector((state) => state.user.is_login);
  let pagePath = ""
  const [path, setPath] = React.useState(pagePath)
  console.log(pagePath)

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  React.useEffect(()=>{
    pagePath = history.location.pathname
    setPath(pagePath)
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [history]);

  return (
    <StyleHeader className={scrollPosition < 10 ? "" : "active"}>
      <a href="/" className="logo">
        <img src={logo} alt="왓챠로고"/>
      </a>
      <div className="head-menu">
        {(() => {
          if((path === "/") || (path === "/sign_up")){
            return(
              <button onClick={() => history.push("/sign_in")} className="btn">로그인</button>
            )
          }else if(path === "/sign_in"){
            return(
              <button onClick={() => history.push("/sign_up")} className="btn">회원가입</button>
            )
          }else {
            return;
          }
        })()}
        {(() => {
          if(is_login){
            <button onClick={null}>
              <img src="../img/profile/img_profile_01.jpg"/>
            </button>
          }
        })()}
        <div className="box-menu">
          <ul className="menu-group">
            <li className="menu-li"></li>
            <li className="menu-li"></li>
            <hr/>
            <li className="menu-li"></li>
            <hr/>
            <li className="menu-li">
              <button>설정</button>
            </li>
            <li className="menu-li">
              <button>공지사항</button>
            </li>
            <li className="menu-li">
              <button>초대하기</button>
            </li>
            <li className="menu-li">
              <button>고객센터</button>
            </li>
            <li className="menu-li">
              <button>로그아웃</button>
            </li>
          </ul>
        </div>
      </div>
    </StyleHeader>
  )
}
//#141517
//rgb(3, 7, 8)
const StyleHeader = styled.header`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 5rem;
  width: 100%;
  height: 7.2rem;
  display:flex;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
  font-size: 1.4rem;
  letter-spacing: -0.4px;
  &.active{
    background-color: rgb(3, 7, 8);
  }

  .logo{
    display:flex;
    align-items: center;
    width: 9.4rem;
    height: 7.2rem;
    img{

    }
  }
  .box-menu{
    display: none;
  }
`
export default Header;
