import { ILoginContentProps } from "./@types";
import {
    LoginContainer,
} from './styles'
import useLoginInfo from '@/hooks/pages/sign_in/useLoginInfo';
import { YouTubeProps } from 'react-youtube';
import YoutubePlayer from '@/atoms/YoutubePlayer/YoutubePlayer';
import Button from "@/atoms/DefaultButton/DefaultButton";


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
      <YoutubePlayer videoId={"9HaU8NjH7bI"} opts={opts} onReady={onPlayerReady}/>
      <Button isGradient={true}>
        <span>✨ </span>
        Cadastre-se
      </Button>
    </LoginContainer>
  )
}
