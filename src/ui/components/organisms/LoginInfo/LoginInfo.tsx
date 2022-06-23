import {
    InfoContainer,
    StyledTitle,
    StyledSubTitle,
    LeftSideInfo,
    BotaoContainer,
    BotaoRegister,
} from './styles'
import Image from "../../atoms/StyledImage/StyledImage";
import useLoginInfo from '../../../../data/hooks/pages/sign_in/useLoginInfo';
import { YouTubeProps } from 'react-youtube';
import YoutubePlayer from '../../atoms/YoutubePlayer/YoutubePlayer';
import LoginContent from '../../molecules/LoginContent/LoginContent';
import { Box } from '@mui/material';

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
                    <StyledTitle>Minha carteira</StyledTitle>
                    <StyledSubTitle>
                        Gerenciador de gastos do mês <span>🤑</span>
                    </StyledSubTitle>
                    <YoutubePlayer videoId={"9HaU8NjH7bI"} opts={opts} onPlayerReady={onPlayerReady}/>
                    <BotaoContainer>
                        <BotaoRegister>
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

