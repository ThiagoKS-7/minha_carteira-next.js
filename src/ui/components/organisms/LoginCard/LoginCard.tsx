import {
    CardContainer,
    Icon,
} from './styles';
import { Grid} from '@mui/material';
import { ICardProps } from './@types/LoginCard';
import LoginContent from '../../molecules/LoginContent/LoginContent';


export default function LoginCard(props: ICardProps) {
    return (
        <>
            <CardContainer>
                    <Icon
                        src="/Images/main-logo.png"
                        alt="login left arrow"
                        width={380}
                        heigth={50}
                    />
                    <LoginContent title="Bem-vindo"/>
            </CardContainer>
        </>
    )
}