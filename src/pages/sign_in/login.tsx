import type { NextPage } from "next";
import Container from "../../ui/components/atoms/Container/Container";
import LoginCard from "../../ui/components/organisms/LoginCard/LoginCard";
import LoginInfo from "../../ui/components/organisms/LoginInfo/LoginInfo";

const Login: NextPage = () => {
    return (
        <Container >
            <LoginInfo/>
            <LoginCard/>
        </Container>
    );
}

export default Login;