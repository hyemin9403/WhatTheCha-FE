import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import {
  SvgFacebook,
  SvgTweeter,
  SvgInstagram,
  SvgBlog,
  SvgFootLogo,
} from "../img/footer/svg_footer";

const Footer = () => {
  const location = useSelector(state => state.router.location);
  const is_login = useSelector((state) => state.user.is_login);

  if(location.pathname === '/video'){
    return null;
  }
  if (is_login) {
    return (
      <StyledFooter>
        <div className="footer-top">
          <ul className="footer-liner">
            <li>왓챠피디아 서비스 이용약관</li>
            <li className="highlight">개인정보 처리 방침</li>
            <li>왓챠 서비스 이용약관</li>
            <li>
              <a
                href="https://watcha.com/zendesk/login"
                rel="noreferrer noopener"
                target="_blank"
              >
                고객센터
              </a>
            </li>
            <li>
              <a
                href="https://watcha.team/"
                rel="noreferrer noopener"
                target="_blank"
              >
                채용정보
              </a>
            </li>
          </ul>
          <ul className="footer-box">
            <li>
              <span>고객센터(이용 및 결제 문의)</span>
              <span>cs@watcha.co.kr /02-515-9985 (유료)</span>
            </li>
            <li>
              <span>제휴 및 대외 협력</span>
              <span>
                <a
                  href="https://watcha.team/contact"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://watcha.team/contact
                </a>
              </span>
            </li>
            <li>
              <span>B2B 이용권 구매 문의</span>
              <span>
                <a href="mailto:ksm1459@coopnc.com">
                  쿠프마케팅 (ksm1459@coopnc.com / 070-4020-5289)
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="footer-info">
            <li>
              <span>주식회사 왓챠</span>
              <span>대표 박태훈</span>
              <span>서울특별시 서초구 강남대로 343 신덕빌딩 3층</span>
            </li>
            <li>
              <span>사업자등록번호 211-88-66013</span>
              <span>통신판매업 신고번호 제 2019-서울서초-0965호</span>
            </li>
            <li>
              <a
                href="https://watcha.team/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <SvgFootLogo />
              </a>
              <span>
                Copyright © 2022 by <em>Watcha, Inc.</em>All rights reserved.
              </span>
            </li>
          </ul>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.facebook.com/watchaKR"
                rel="noreferrer noopener"
                target="_blank"
              >
                <SvgFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/watcha_kr"
                rel="noreferrer noopener"
                target="_blank"
              >
                <SvgTweeter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/watcha_kr/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://team.watcha.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <SvgBlog />
              </a>
            </li>
          </ul>
        </div>
      </StyledFooter>
    );
  }
  return null;
};
const StyledFooter = styled.footer`
  position: relative;
  padding: 2.7rem 4rem 4rem;
  .footer-top {
    margin: 0 0 4.6rem;
    display: inline-block;
    position: relative;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    vertical-align: top;
    .footer-liner {
      margin: 0 0 2.4rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      li:after {
        content: "";
        display: inline-block;
        background: rgba(255, 255, 255, 0.2);
        vertical-align: top;
        width: 1px;
        height: 10px;
        margin: 5px 6px 0;
      }
      li:last-child:after {
        display: none;
      }
      .highlight {
        font-weight: 700;
        color: #ffffff;
      }
    }
    .footer-box {
      li {
        line-height: 2rem;
        span:first-child {
          display: inline-block;
          width: 139px;
        }
        span:last-child:before {
          content: "";
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          vertical-align: middle;
          width: 1px;
          height: 10px;
          margin: 0 9px 0 0;
        }
      }
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: -0.5px;
    vertical-align: middle;
    line-height: 2rem;
    .footer-info {
      display: flex;
      flex-direction: column;
      li {
        span:after {
          content: "";
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          vertical-align: top;
          width: 1px;
          height: 10px;
          margin: 5px 6px 0;
        }
        span:last-child:after {
          display: none;
        }
        a {
          svg {
            position: relative;
            top: 1px;
            margin-right: 3px;
            margin-left: 1px;
          }
        }
      }
    }
    .footer-social {
      display: flex;
      li {
        a {
          margin: 0 0 0 2rem;
          width: 3.6rem;
          height: 3.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #fff;
          border-radius: 50%;
          svg {
            width: 2.4rem;
            height: 2.4rem;
          }
        }
      }
    }
  }
`;
export default Footer;
