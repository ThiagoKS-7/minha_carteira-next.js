import YouTube from 'react-youtube';
import { IYtPlayerProps } from './@types';

import { Container }from './styles';

export default function YoutubePlayer(props: IYtPlayerProps) {
    return (
        <>
            <Container>
                <div style={{
                    marginTop:"25px",
                    marginLeft: "2rem",
                    borderRadius: "5px",
                    width:"87%",
                    background:"linear-gradient(90deg, rgb(23, 94, 200) 0%, #2b0a8f 40%, #151474 50%)",
                    alignItems:"center", justifyContent:"center"
                }}>
                    <div style={{width:"100%", height:"100%", padding:"5px"}}>
                        <YouTube 
                            videoId={props.videoId}
                            opts={props.opts} 
                            onReady={props.onPlayerReady}
                        />
                    </div>
                </div>
            </Container>
        </>

    )
}