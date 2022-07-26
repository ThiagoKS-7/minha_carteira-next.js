import { ILoginContainerProps } from './@types';
import {
    StyledContainer
} from './styles';


export default function Container(props: ILoginContainerProps ) {
    return (
        <>
            <StyledContainer style={props.style}>
                {props.children}
            </StyledContainer>
        </>
    )
}