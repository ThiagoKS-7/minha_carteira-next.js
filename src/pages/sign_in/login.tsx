import type { NextPage } from "next";
import Grid from "@/atoms/LoginContainer/LoginContainer";
import LoginHeader from "@/organisms/Login/LoginHeader/LoginHeader";
import LoginAside from "@/organisms/Login/LoginAside/LoginAside";
import LoginContent from "@/organisms/Login/LoginContent/LoginContent";
import { Box } from "@mui/material";
import MobileContainer from "@/atoms/MobileContainer/MobileContainer";
import Text from '@/atoms/DefaultText/DefaultText';
const Login: NextPage = () => {
    return (
        <>
            <Box component={'div'} sx={{display:{sm:'contents',xs: 'none'}}}>
                <Grid>
                    <Box component={'div'} sx={{display:{sm:'contents',xs: 'none'}}}>
                        <LoginHeader title={'Minha carteira'} subtitle={'Gerenciador de gastos do mês 🤑'}/>
                    </Box>
                    <Box component={'div'} sx={{display:{sm:'contents',xs: 'none'}}}>
                        <LoginAside />
                    </Box>
                    <LoginContent />
                </Grid>
            </Box>
            <Box component={'div'} sx={{display:{sm:'none',xs: 'contents'}}}>
                <MobileContainer>
                    <Text isTitle={true}>
                        Minha carteira
                    </Text>
                    <Text isTitle={false}>
                        Gerenciador de gastos do mês 🤑
                    </Text>
                    <LoginContent />
                </MobileContainer>
            </Box>
        </>
    );
}

export default Login;