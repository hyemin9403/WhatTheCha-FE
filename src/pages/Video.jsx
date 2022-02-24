import React from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components';

// https://youtu.be/nFwR7Qk0VKg
const Video = (props) => {
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
    return (
        <StyleVideo>
            <YouTube videoId={youtubeId !== "" ? youtubeId : "nFwR7Qk0VKg"} opts={opts} onReady={onReady} />
        </StyleVideo>
    );
};
const StyleVideo = styled.div`
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
`
export default Video;