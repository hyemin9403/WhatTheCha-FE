import React from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import styled, {keyframes} from 'styled-components';
import { history } from '../redux/configureStore';

// https://youtu.be/nFwR7Qk0VKg
const Video = (props) => {
    const ref = React.useRef()
    const location = useLocation();
    const youtubeId = location.state;
    console.log("프롭", props)
    console.log("유튜브 아이디", youtubeId)
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 1,
        },
    };
    const onReady = (e) => {
        // access to player in all event handlers via event.target
        const current = e.target.getCurrentTime()
        const total = e.target.getDuration()
        console.log(e.target.playerInfo.duration)
        console.log(e.target)
        console.log("총 시간", total)
        console.log("본 시간", current)
        console.log("비율", current / total * 100)
        e.target.seekTo(0)
        e.target.playVideo();
    }
    const onStateChange = (e) => {
        const current = e.target.getCurrentTime()
        const total = e.target.getDuration()
        const rate = current / total * 100
        console.log("총 시간", total)
        console.log("본 시간", current)
        console.log("비율", rate)
        if(rate >= 90){
            history.push('/browse/video')
        }
    }
    React.useEffect(() => {
        ref.current.addEventListener('mousemove', () => {
            let bgtimeout;
            clearTimeout(bgtimeout);
            bgtimeout = setTimeout(function(){
                document.getElementById('turn-off').style.opacity = "1";
            }, 150);
        })
        return (
            ref.current.removeEventListener('mousemove', () => {
                document.getElementById('turn-off').style.opacity = "1";
            })
        )
    })
    
    return (
        <StyleVideo ref={ref}>
            <button onClick={() => {history.push('/browse/video')}} id="turn-off">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="#FFF" fillRule="evenodd" d="M21.879 24l-7.566-7.566a.8.8 0 0 1 0-1.131l.99-.99a.8.8 0 0 1 1.131 0L24 21.879l7.566-7.566a.8.8 0 0 1 1.131 0l.99.99a.8.8 0 0 1 0 1.131L26.121 24l7.566 7.566a.8.8 0 0 1 0 1.132l-.99.99a.8.8 0 0 1-1.131 0L24 26.12l-7.566 7.567a.8.8 0 0 1-1.131 0l-.99-.99a.8.8 0 0 1 0-1.132L21.879 24z"></path>
                </svg>
            </button>
            <YouTube videoId={youtubeId !== "" ? youtubeId : "nFwR7Qk0VKg"} opts={opts} onReady={onReady} onStateChange={onStateChange} />
        </StyleVideo>
    );
};
const showCard = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StyleVideo = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;    
    width: 100%;
    height: 100vh;
    div{
        width: 100%;
        height: 100%;
    }
    .ytp-title-enable-channel-logo{
        .ytp-title-channel{
            display: none!important;
        }
    } 
    button{
        opacity: 0;
        position: absolute;
        top: 4rem;
        right: 4rem;
        width: 4.8em;
        height: 4.8em;
        cursor: pointer;
        border: 0px none transparent;
        outline: none 0px;
        background: none;
        appearance: initial;
        padding: 0px;
    }
`
export default Video;