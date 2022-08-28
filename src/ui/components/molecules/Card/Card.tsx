import { useCallback } from 'react';
import { ICardProps } from './@types';
import {
    StyledContainer,
    TitleContainer,
    AmountContainer,
    ObsContainer,
    StyledDollar,
    StyledUp,
    StyledDown,
    SvgContainer,
    CardBox,
} from './styles';


export default function Card(props: ICardProps ) {
    const getSvg = useCallback(()=> {
        switch(props.icon) {
            case 'dollar':
                return <StyledDollar/>;
            case 'entries':
                return <StyledUp/>;
            case 'exits':
                return <StyledDown/>;
            default: 
                return <StyledDollar/>;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
            <StyledContainer style={{backgroundColor:props.color ? props.color : 'blue' }}>
                <CardBox>
                    <TitleContainer>{props.title}</TitleContainer>
                    <AmountContainer>R$ {props.amount.toFixed(2)}</AmountContainer>
                </CardBox>
                    { props.obs ? <ObsContainer>{props.obs}</ObsContainer> : <></>}
                    <SvgContainer>
                        {getSvg()}
                    </SvgContainer>
            </StyledContainer>
        </>
    )
}