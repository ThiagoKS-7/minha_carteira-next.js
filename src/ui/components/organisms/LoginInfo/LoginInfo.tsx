import {
    InfoContainer,
    StyledTitle,
    StyledSubTitle,
    LeftSideInfo,
    BotaoContainer,
    BotaoRegister,
} from './LoginInfo.styles'
import Image from "../../atoms/StyledImage/StyledImage";
import YouTube, { YouTubeProps } from 'react-youtube';

export default function LoginInfo() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          showinfo: 0,
          controls:0,
          modestbranding: 1,
        },
      };

    return (
            <InfoContainer>
                <LeftSideInfo>
                    <StyledTitle>Minha carteira</StyledTitle>
                    <StyledSubTitle>
                        Gerenciador de gastos do mês <span>🤑</span>
                    </StyledSubTitle>
                    <div style={{
                        marginTop:"25px",
                        marginLeft: "2rem",
                        width:"87%", height:"48%",
                        background:"linear-gradient(90deg, rgb(23, 94, 200) 0%, #2b0a8f 40%, #151474 50%)",
                        alignItems:"center", justifyContent:"center"
                        }}>
                        <div style={{width:"100%", height:"100%", padding:"5px"}}>
                            <YouTube 
                                videoId="9HaU8NjH7bI"
                                opts={opts} 
                                onReady={onPlayerReady}
                            />
                        </div>
                    </div>
                    <BotaoContainer>
                        <BotaoRegister>
                           <span>✨ </span>
                           Cadastre-se
                        </BotaoRegister>
                    </BotaoContainer>
                </LeftSideInfo>
                    <Image 
                        src="/Images/mng.png"
                        alt="login info image"
                    />
            </InfoContainer>         
    )
}

