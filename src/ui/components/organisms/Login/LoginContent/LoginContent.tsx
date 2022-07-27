import { ILoginContentProps } from "./@types";
import {
    LoginContainer,
    ImageWrapper,
    LoginWrapper,
    VideoWrapper,
    StyledImage,
} from './styles'
import useLoginInfo from '@/hooks/pages/sign_in/useLoginInfo';
import { YouTubeProps } from 'react-youtube';
import YoutubePlayer from '@/atoms/YoutubePlayer/YoutubePlayer';
import Button from "@/atoms/DefaultButton/DefaultButton";
import Text from '@/atoms/DefaultText/DefaultText';
import DefaultInput from "@/atoms/DefaultInput/DefaultInput";
import router from "next/router";

export default function LoginContent(props: ILoginContentProps) {
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
    <LoginContainer>
      <VideoWrapper>
          <YoutubePlayer videoId={"9HaU8NjH7bI"} opts={opts} onReady={onPlayerReady}/>
          <Button isGradient={true} onClick={() => router.push("/sign_in/register")}>
            <span>✨ </span>
            Cadastre-se
          </Button>
          <LoginWrapper>
            <Text isTitle={true}>
                Ou faça o seu login
            </Text>
            <DefaultInput type="email" placeholder=" Digite o seu e-mail:" label="📧"/>
            <DefaultInput type="password" placeholder=" Digite a sua senha:" label="🔑" />
            <Button isGradient={false} onClick={() => router.push("/")}>
              Entrar
              <span>🚀</span>
            </Button>
          </LoginWrapper>
      </VideoWrapper>
      <ImageWrapper>
        <StyledImage
          src="/Images/mng.png"
          alt="main content image"
        />
      </ImageWrapper>
    </LoginContainer>
  )
}
