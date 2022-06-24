import {
    CardContainer,
    Icon,
} from './styles';
import { Grid} from '@mui/material';
import { ICardProps } from './@types';
import LoginContent from '@/molecules/LoginContent/LoginContent';


export default function LoginCard(props: ICardProps) {
    return (
        <>
            <CardContainer>
                    <div style={{display:"flex", justifyContent:"center", height: "fit-content"}}>
                        <Icon
                            src="/Images/main-logo.png"
                            alt="login left arrow"
                            width={380}
                            heigth={50}
                        />
                    </div>
                    <LoginContent title="Bem-vindo"/>
            </CardContainer>
        </>
    )
}