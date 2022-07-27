import {
    InfoContainer,
    StyledTitle,
    StyledSubTitle,
    LeftSideInfo,
    BotaoContainer,
    BotaoRegister,
} from './styles'
import Image from "@/atoms/StyledImage/StyledImage";
import Icon from "@/atoms/Icon/Icon";
import useLoginInfo from '@/hooks/pages/sign_in/useLoginInfo';
import { YouTubeProps } from 'react-youtube';
import YoutubePlayer from '@/atoms/YoutubePlayer/YoutubePlayer';
import LoginContent from '@/molecules/LoginContent/LoginContent';
import { Box } from '@mui/material';
import router from 'next/router';

export default function LoginInfo() {
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
      }
    const {
        onPlayerReady,
    } = useLoginInfo();
    return (
            <InfoContainer>
                <LeftSideInfo>
                    <StyledTitle>
                        <span style={{marginRight:"50px"}}>Minha carteira</span>
                        <Icon
                            src="/Images/money.gif"
                            alt="login purple icon"
                            width={"10%"}
                            heigth={100}
                        />
                    </StyledTitle>
                    <StyledSubTitle>
                        Gerenciador de gastos do mês <span>🤑</span>
                    </StyledSubTitle>
                    <YoutubePlayer videoId={"9HaU8NjH7bI"} opts={opts} onPlayerReady={onPlayerReady}/>
                    <BotaoContainer>
                        <BotaoRegister onClick={() => router.push("/sign_in/register")}>
                           <span>✨ </span>
                           Cadastre-se
                        </BotaoRegister>
                    </BotaoContainer>
                    <Box component={'div'} sx={{display:{sm: 'none', xs: 'initial'}}}>
                        <LoginContent title="Ou faça seu login"/>
                    </Box>
                </LeftSideInfo>
                    <Image 
                        src="/Images/mng.png"
                        alt="login info image"
                    />
            </InfoContainer>         
    )
}

