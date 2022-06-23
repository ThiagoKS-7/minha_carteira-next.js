import {
    CardContainer,
    StyledTitle,
    TextFieldWrapper,
    Input,
    BotaoSubmit,
    Icon,
    TitleContainer,
    BotaoContainer,
} from './LoginCard.styles';
import { Grid} from '@mui/material';
interface ICardProps {
    children: any;
    valueEmail:string,
    onChangeEmail: (e:any) => void
    valuePassword:string,
    onChangePassword: (e:any) => void
}

export default function LoginCard(props: ICardProps) {
    return (
        <>
            <CardContainer>
                <TitleContainer>
                    <StyledTitle>
                        Bem-vindo
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
                        <span>Entrar</span>
                        <Icon
                            src="/Images/arrow-left.png"
                            alt="login left arrow"
                            width={30}
                            heigth={30}
                        />
                    </BotaoContainer>
                </BotaoSubmit>
            </CardContainer>
        </>
    )
}