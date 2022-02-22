import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

// https://youtu.be/nFwR7Qk0VKg
const Video = () => {
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
        //e.target.pauseVideo();
    }
    return (
        <StyleVideo>
            <YouTube videoId="nFwR7Qk0VKg" opts={opts} onReady={onReady} />
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