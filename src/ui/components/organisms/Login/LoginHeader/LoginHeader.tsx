import { ILoginHeaderProps } from "./@types";
import LoginTitlePair from "@/molecules/Login/LoginTitlePair/LoginTitlePair";
import { Box } from '@mui/material';
import {
  Container,
  LoginImage,
  LoginGif,
} from './styles'


export default function LoginHeader(props: ILoginHeaderProps) {
  return (
    <Container>
      <LoginTitlePair title={props.title} subtitle={props.subtitle}/>
      <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
        <LoginGif src="/Images/test.gif"/>
      </Box>
      <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
        <LoginImage src="/Images/right-finance.png"/>
      </Box>
    </Container>
  )
}

