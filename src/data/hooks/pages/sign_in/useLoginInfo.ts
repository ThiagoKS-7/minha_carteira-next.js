import { YouTubeProps } from 'react-youtube';

export default function useLoginInfo() {
    const onPlayerReady: any = (event:any) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    return onPlayerReady;
}