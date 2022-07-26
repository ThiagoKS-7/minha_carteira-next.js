import type { NextPage } from "next";
import Grid from "../../ui/components/atoms/LoginContainer/LoginContainer";
import LoginHeader from "@/organisms/Login/LoginHeader/LoginHeader";
import LoginAside from "@/organisms/Login/LoginAside/LoginAside";
import LoginContent from "@/organisms/Login/LoginContent/LoginContent";
import { Box } from '@mui/material';
const Login: NextPage = () => {
    return (
        <Grid>
            <LoginHeader title={'Minha carteira'} subtitle={'Gerenciador de gastos do mês 🤑'}/>
            <LoginAside />
            <LoginContent />
        </Grid>
    );
}

export default Login;