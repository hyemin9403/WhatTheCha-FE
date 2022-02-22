import React from 'react';
import styled from 'styled-components';

const HeadMenu = () => {
    const [active, setActive] = React.useState(false)
    return (
        <React.Fragment>
            <button onClick={() => setActive(!active)}>
                <img src="../img/profile/img_profile_01.jpg"/>
            </button>
            {(() => {
                if(active){
                    <BoxMenu>
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
                    </BoxMenu>
                }
                return null;
            })()}
        </React.Fragment>
    );
};
const BoxMenu = styled.div`
    display: none;  
`

export default HeadMenu;