import {
    CardContainer,
    StyledTitle,
    TextFieldWrapper,
    Input,
    BotaoSubmit,
} from './LoginCard.styles';
import { Grid, TextField } from '@mui/material';
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
                <StyledTitle>Bem-vindo</StyledTitle>
                <TextFieldWrapper>
                    <Grid item xs={12}>
                        <Input type="email" placeholder=" E-mail"/>
                    </Grid>
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Grid item xs={12}>
                        <Input type="password" placeholder=" Senha"/>
                    </Grid>
                </TextFieldWrapper>
                <BotaoSubmit>
                    Entrar
                </BotaoSubmit>
            </CardContainer>
        </>
    )
}