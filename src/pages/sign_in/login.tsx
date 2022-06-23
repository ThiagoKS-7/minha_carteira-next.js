import type { NextPage } from "next";
import Container from "../../ui/components/atoms/Container/Container";
import LoginCard from "../../ui/components/organisms/LoginCard/LoginCard";
import LoginInfo from "../../ui/components/organisms/LoginInfo/LoginInfo";
import { Box } from '@mui/material';

const Login: NextPage = () => {
    return (
        <Container >
            <LoginInfo/>
            <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                <LoginCard/>
            </Box>
        </Container>
    );
}

export default Login;