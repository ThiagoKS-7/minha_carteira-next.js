import { ICardProps } from './@types';
import {
    StyledContainer,
    TitleContainer,
    AmountContainer,
    Icon,
    ObsContainer,
} from './styles';

export default function Card(props: ICardProps ) {
    return (
        <>
            <StyledContainer style={{backgroundColor:props.color ? props.color : 'blue' }}>
                <TitleContainer>{props.title}</TitleContainer>
                <AmountContainer>R$ {props.amount.toFixed(2)}</AmountContainer>
                { props.obs ? <ObsContainer>{props.obs}</ObsContainer> : <></>}
            </StyledContainer>
        </>
    )
}