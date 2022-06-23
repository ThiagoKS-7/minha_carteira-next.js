import YouTube, from 'react-youtube';
import { IYtPlayerProps } from './@types/IYtPlayerProps';


export default function YoutubePlayer(props: IYtPlayerProps) {
    return (
        <>
            <div style={{
                marginTop:"25px",
                marginLeft: "2rem",
                borderRadius: "5px",
                width:"87%", height:"48%",
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
        </>

    )
}