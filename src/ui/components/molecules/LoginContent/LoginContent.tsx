import { Box, Grid } from '@mui/material';
import router from 'next/router';
import { IContentProps } from './@types';
import {
    StyledTitle,
    TextFieldWrapper,
    Input,
    BotaoSubmit,
    Icon,
    TitleContainer,
    BotaoContainer,
    Text,
    ButtonIcon
} from './styles';

export default function LoginContent(props: IContentProps) {
    return (
        <>
            <TitleContainer>
                <StyledTitle>
                    {props.title}
                </StyledTitle>
                <div style={{display:"flex", alignItems:"center", paddingTop:"15px"}}>
                    <Icon
                        src="/Images/purple-gif.gif"
                        alt="login purple icon"
                        width={75}
                        heigth={75}
                    />
                </div>
            </TitleContainer>
            <TextFieldWrapper>
                <h3>📧</h3>
                <Grid item xs={12}>
                    <Input type="email" placeholder=" E-mail"/>
                </Grid>
            </TextFieldWrapper>
            <TextFieldWrapper>
                <h3>🔑</h3>
                <Grid item xs={12}>
                    <Input type="password" placeholder=" Senha"/>
                </Grid>
            </TextFieldWrapper>
            <BotaoSubmit>
                <BotaoContainer onClick={() => router.push("/")}>
                    <Text>
                        Entrar 🚀
                    </Text>
                    <ButtonIcon
                        src="/Images/arrow-left.png"
                        alt="login left arrow"
                    />
                </BotaoContainer>
            </BotaoSubmit>
        </>
    )
}