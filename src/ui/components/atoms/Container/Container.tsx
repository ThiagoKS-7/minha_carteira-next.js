import { IContainerProps } from './@types';
import {
    StyledContainer
} from './styles';


export default function Container(props: IContainerProps ) {
    return (
        <>
            <StyledContainer style={props.style}>
                {props.children}
            </StyledContainer>
        </>
    )
}