import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { actionCreator as userActions } from '../redux/modules/user';
import { ReactComponent as Plus } from "../img/header/plus.svg";
import profileTmp from "../img/profile/img_profile_01.jpg"

const HeadMenu = () => {
    const ref = React.useRef();
    const btnRef = React.useRef();
    const dispatch = useDispatch();
    const [active, setActive] = React.useState(false)
    //console.log(active)

    const handleCloseMenu= (e) => {
        if(!ref.current?.contains(e.target) & !btnRef.current?.contains(e.target)) setActive(false);
    }
       
    React.useEffect(() => {
        window.addEventListener('click', handleCloseMenu);
        return () => {
            window.removeEventListener('click', handleCloseMenu);
        };
    });
    return (
        <React.Fragment>
            <BtnProfile ref={btnRef} onClick={() => setActive(!active)}>
                <img src={profileTmp}/>
            </BtnProfile>
            {
                active && (
                    <BoxMenu ref={ref}>
                        <ul className="menu-group">
                            <li className="menu-li">
                                <button>
                                    <div className='btn-menu-img'>
                                        <img src=""/>
                                    </div>
                                    <div className='btn-menu-text'>tmp</div>
                                </button>
                            </li>
                            <li className="menu-li">
                                <button>
                                    <Plus/>
                                    <div className='btn-menu-text'>새 프로필</div>
                                </button>
                            </li>
                            <hr/>
                            <li className="menu-li">
                                <button>
                                    <div className='btn-menu-text'>프로필 편집</div>
                                </button>
                            </li>
                            <hr/>
                            <li className="menu-li">
                                <button><div className='btn-menu-text'>설정</div></button>
                            </li>
                            <li className="menu-li">
                                <button><div className='btn-menu-text'>공지사항</div></button>
                            </li>
                            <li className="menu-li">
                                <button><div className='btn-menu-text'>초대하기</div></button>
                            </li>
                            <li className="menu-li">
                                <button>
                                    <a href="https://watcha.com/zendesk/login">
                                        <div className='btn-menu-text'>고객센터</div>
                                    </a>
                                </button>
                            </li>
                            <li className="menu-li">
                                <button onClick={() => dispatch(userActions.logoutFB())}>
                                    <div className='btn-menu-text'>로그아웃</div>
                                </button>
                            </li>
                        </ul>
                    </BoxMenu>
                )
            }
        </React.Fragment>
    );
};
const BtnProfile = styled.button`
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 100%;
    margin: 0;
    overflow: hidden;
    img{
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
`
const BoxMenu = styled.div`
    display: block;
    visibility: visible;
    position: absolute;
    top: 44px;
    right: 44px;
    .menu-group{
        margin: 4px 0px;
        width: 200px;
        padding: 4px 0px;
        display: flex;
        flex-direction: column;
        background: rgb(40, 41, 42);
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 25%) 0px 8px 16px;
        overflow: hidden;
        hr{
            margin: 4px 0px;
            padding: 0px;
            width: 100%;
            height: 1px;
            background-color: rgb(56, 57, 61);
            border: none;
        }
    }
    .menu-li{
        background: rgb(40, 41, 42);
        button{
            padding: 0px 16px;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 0px;
            text-decoration: none;
            line-height: 2rem;
            color: rgb(255, 255, 255);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            .btn-menu-img{
                position: relative;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin: 0px 8px 0px 0px;
            }
            .btn-menu-text{
                flex: 1 1 0%;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 20px;
                color: rgb(255, 255, 255);
                white-space: nowrap;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            svg{
                margin-right: 8px;
            }
        }
        &:hover{
            background: rgb(50, 50, 50);
        }
    }
`

export default HeadMenu;