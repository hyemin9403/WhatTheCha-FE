import React from "react";
import styled from "styled-components"
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { debounce } from "lodash"

import logo from "../img/header/logo.svg";
import { useHistory, useLocation, match } from "react-router-dom";
import { HeadMenu } from "./index";

const Header = (props) => {
  const location = useSelector(state => state.router.location)
  const is_login = useSelector((state) => state.user.is_login);
  const [path, setPath] = React.useState("")

  let landing = document.getElementById("layer1")?.parentNode.className;
  //console.log(landing)

  React.useEffect(()=>{
    setPath(history.location.pathname)
  }, [history.location.pathname, is_login, landing]);

  if(path === "/video"){
    return null;
  }
  return (
    <StyleHeader className={landing === "swiper-slide swiper-slide-active" ? "active" : ""}>
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
            <HeadMenu/>
          }
          return null;
        })()}
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
`
export default Header;
