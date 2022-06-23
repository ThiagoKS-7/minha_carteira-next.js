import { Grid } from '@mui/material';
import { IContentProps } from './@types/IContentProps';
import {
    StyledTitle,
    TextFieldWrapper,
    Input,
    BotaoSubmit,
    Icon,
    TitleContainer,
    BotaoContainer,
} from './styles';

export default function LoginContent(props: IContentProps) {
    return (
        <>
            <TitleContainer>
                <StyledTitle>
                    {props.title}
                </StyledTitle>
                <Icon
                    src="/Images/purple-gif.gif"
                    alt="login purple icon"
                    width={75}
                    heigth={75}
                />
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
                <BotaoContainer>
                    <span>Entrar 🚀</span>
                    <Icon
                        src="/Images/arrow-left.png"
                        alt="login left arrow"
                        width={30}
                        heigth={30}
                    />
                </BotaoContainer>
            </BotaoSubmit>
        </>
    )
}