import { Box } from "@mui/material";
import emojis from "data/utils/emojis";
import { useMemo } from "react";
import { IMainHeaderProps } from "./@types";
import ExitIcon from '@mui/icons-material/ExitToApp';
import {
    Container,
    Profile,
    WelcomeWrapper,
    Welcome,
    UserName,
} from './styles'
import router from "next/router";


export default function MainHeader (props: IMainHeaderProps) {
  const emoji = useMemo(() => {
      const indice = Math.floor(Math.random() * emojis.length);
      return emojis[indice];
  },[]);
  
  return (
    <Container>
      <h1>Toggle</h1>
      <Box component={'div'} sx={{display:{sm: 'contents', xs: 'none'}}}>
        <Profile>
          <WelcomeWrapper>
            <Welcome>Olá, {emoji}</Welcome>
            <Box component={ExitIcon} color="inherit" sx={{ mr: 1 }} onClick={()=>{router.push("/sign_in/login")}} style={{cursor:"pointer"}}/>
          </WelcomeWrapper>
            <UserName>Thiago Kasper de Souza</UserName>
        </Profile>
      </Box>
    </Container>
  )
}
