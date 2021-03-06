import DefaultIcon from "@/atoms/DefaultIcon/DefaultIcon";
import DefaultInput from "@/atoms/DefaultInput/DefaultInput";
import { Box } from "@mui/material";
import { IAsideProps } from "./@types";
import {
    AsideContainer,
} from './styles'
import Button from "@/atoms/DefaultButton/DefaultButton";
import router from "next/router";


export default function LoginAside(props: IAsideProps) {
  return (
      <AsideContainer>
        <Box component={'div'} sx={{display:{sm:'initial',xs: 'none'}}}>
          <DefaultIcon 
            src="/Images/main-logo.png"
            alt="login left arrow"
            width={380}
            height={50}
          />
          <DefaultInput type="email" placeholder=" Digite o seu e-mail:" label="📧"/>
          <DefaultInput type="password" placeholder=" Digite a sua senha:" label="🔑" />
          <Button isGradient={false} onClick={() => router.push("/?value=1", undefined, {shallow:true})}>
            Entrar
            <span>🚀</span>
          </Button>
        </Box>
      </AsideContainer>
  )
}
