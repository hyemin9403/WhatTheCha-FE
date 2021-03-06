import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { actionCreator as movieActions } from '../redux/modules/movie';

const Star = (props) => {
    const dispatch = useDispatch();
    const { is_score, _movieId } = props
    const ref = React.useRef();
    const [score, setScore] = React.useState("0%");
    const [starText, setText] = React.useState("이미 본 작품인가요?");
    const target = document.getElementById('star');

  //console.log("변화감지", score, starText)

    const targetOffset = (e) => {
        ref?.current.addEventListener("mousemove", (e) => {
            // console.log(target.childNodes[0].offsetWidth)
            // console.log("오프셋 좌표", e.offsetX)
            // console.log(e.offsetX / e.target.offsetWidth * 100)
            const base_width = ref?.current.childNodes[0].offsetWidth;
            let star_offsetX = e.offsetX;
            let star_width = "";
            let star_text = "";

            if(star_offsetX / base_width * 100 <= 10){
                star_width = "10%";
                star_text = "최악이에요!";
            }
            else if(star_offsetX / base_width * 100 >= 10 & star_offsetX / base_width * 100 <= 20){
                star_width = "20%";
                star_text = "싫어요";
            }
            else if(star_offsetX / base_width * 100 >= 20 & star_offsetX / base_width * 100 <= 30){
                star_width = "30%";
                star_text = "재미없어요";
            }
            else if(star_offsetX / base_width * 100 >= 30 & star_offsetX / base_width * 100 <= 40){
                star_width = "40%";
                star_text = "별로예요";
            }
            else if(star_offsetX / base_width * 100 >= 40 & star_offsetX / base_width * 100 <= 50){
                star_width = "50%";
                star_text = "부족해요";
            }
            else if(star_offsetX / base_width * 100 >= 50 & star_offsetX / base_width * 100 <= 60){
                star_width = "60%";
                star_text = "보통이에요";
            }
            else if(star_offsetX / base_width * 100 >= 60 & star_offsetX / base_width * 100 <= 70){
                star_width = "70%";
                star_text = "볼만해요";
            }
            else if(star_offsetX / base_width * 100 >= 70 & star_offsetX / base_width * 100 <= 80){
                star_width = "80%";
                star_text = "재미있어요";
            }
            else if(star_offsetX / base_width * 100 >= 80 & star_offsetX / base_width * 100 <= 90){
                star_width = "90%";
                star_text = "훌륭해요"; 
            }
            else if(star_offsetX / base_width * 100 >= 90 & star_offsetX / base_width * 100 <= 100) {
                star_width = "100%";
                star_text = "최고예요!";
            }
            ref.current.previousSibling.textContent = star_text
            ref.current.childNodes[1].style.width = star_width
        })
        /* ref?.current.addEventListener('mouseleave', () => {
            ref.current.previousSibling.textContent = starText
            ref.current.childNodes[1].style.width = score
            console.log("리브", score, starText)
        }) */
    }
    const selectScore = () => {
        console.log("클릭 content",ref.current.previousSibling.textContent)
        console.log("클릭 width",ref.current.childNodes[1].style.width)
        setText(ref.current.previousSibling.textContent)
        setScore(ref.current.childNodes[1].style.width)
        let calcScore = parseInt(ref.current.childNodes[1].style.width) / 20
        console.log(calcScore)
        dispatch(movieActions.setEvalFB(_movieId, calcScore))
        console.log("클릭 스코어", score)
        console.log("클릭 텍스트", starText)
    }

    React.useEffect(() => {
        if (!is_score) {
            ref?.current.addEventListener("mouseenter", targetOffset);
            // ref?.current.addEventListener('click', () => {
            //     setText(ref.current.previousSibling.textContent)
            //     setScore(ref.current.childNodes[1].style.width)
            //     let calcScore = parseInt(ref.current.childNodes[1].style.width) / 20
            //     console.log(calcScore)
            //     dispatch(movieActions.setEvalFB(_movieId, calcScore))
            //     console.log("클릭 스코어", score)
            //     console.log("클릭 텍스트", starText)
            // })
        }
    }, []);

    React.useEffect(() => {
        ref?.current.addEventListener('mouseleave', () => {
            ref.current.previousSibling.textContent = starText
            ref.current.childNodes[1].style.width = score
            console.log("리브", score, starText)
        })
    }, [starText]);

    let style = {
        width: !is_score ? score : is_score * 20 + "%",
    };

    return (
        <StyleStar className={is_score ? "edit" : ""}>
        {!is_score && <p>{starText}</p>}
        <div onClick={() => selectScore()} ref={ref} className="star-wrap" id="star">
            <div className="star-empty">☆☆☆☆☆</div>
            <div className="star-check" style={style}>
            ★★★★★
            </div>
        </div>
        </StyleStar>
    );
};
const StyleStar = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 1.40625vw;
  display: flex;
  align-items: center;
  line-height: 1em;
  text-align: center;
  user-select: none;
  font-size: 1.5625vw;
  &.edit {
    font-size: 1.25vw;
  }
  p {
    width: 11.7188vw;
    font-size: 1.09375vw;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: -0.03125vw;
    line-height: 1.5625vw;
    text-align: left;
  }
  .star-wrap {
    padding-bottom: 0.3vw;
    position: relative;
    display: inline-block;
    cursor: pointer;
    letter-spacing: -0.3rem;
    .star-empty {
      color: rgb(255, 255, 255);
    }
    .star-check {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      white-space: nowrap;
      overflow: hidden;
      color: rgb(255, 255, 255);
      width: 0%;
    }
  }
`;
export default Star;
