import { IMainContainerProps } from './@types';
import {
    StyledContainer
} from './styles';


export default function Container(props: IMainContainerProps ) {
    return (
        <>
            <StyledContainer style={props.style}>
                {props.children}
            </StyledContainer>
        </>
    )
}