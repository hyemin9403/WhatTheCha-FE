import React from "react";
import styled from "styled-components"
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { debounce } from "lodash"

import logo from "../img/header/logo.svg";
import { useHistory, useLocation, match } from "react-router-dom";
import { HeadMenu } from "./index";

const Header = (props) => {
  const location = useSelector(state => state.router.location);
  const is_login = useSelector((state) => state.user.is_login);
  const [path, setPath] = React.useState("");
  const [active, setActive] = React.useState(false);

  function observDom(){
    if(history.location.pathname !== "/"){
      return;
    }

    // Select the node that will be observed for mutations
    const targetNode = document.getElementById("layer1")?.parentNode;
    if(!targetNode){
      window.setTimeout(observDom, 500);
      return;
    }
    // Options for the observer (which mutations to observe)
    const config = { attributes: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
              console.log('The ' + mutation.attributeName + ' attribute was modified.');
              let landing = targetNode.classList.contains('swiper-slide-active');
              if(!landing) setActive(!landing)
              else setActive(!landing)
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }
  observDom();

  React.useEffect(()=>{
    setPath(history.location.pathname);
  }, [history.location.pathname, is_login]);

  if(path === "/video"){
    return null;
  }
  return (
    <StyleHeader className={is_login ? "main" : active ? "active" : ""}>
      <a href="/" className="logo">
        <img src={logo} alt="왓챠로고"/>
      </a>
      <div className="head-menu">
        {(() => {
          if((path === "/") || (path === "/sign_up")){
            return(
              <button onClick={() => {history.push("/sign_in"); setActive(false)}} className="btn">로그인</button>
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
            return (
              <HeadMenu/>
            )
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
  height: 72px;
  display:flex;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
  font-size: 1.4rem;
  letter-spacing: -0.4px;
  &.main{
    height: 56px;
    background-color: #141517;
  }
  &.active{
    background-color: rgb(3, 7, 8);
  }
  .head-menu{
    display: flex;
    align-items: center;
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
