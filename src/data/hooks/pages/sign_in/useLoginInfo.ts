import {useState} from 'react';
import { YouTubeProps } from 'react-youtube';

export default function useLoginInfo() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    


    return (onPlayerReady)
}