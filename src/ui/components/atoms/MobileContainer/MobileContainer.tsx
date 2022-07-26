import { IMobileContainerProps } from './@types';
import {
    StyledContainer
} from './styles';


export default function MobileContainer(props: IMobileContainerProps ) {
    return (
        <>
            <StyledContainer style={props.style}>
                {props.children}
            </StyledContainer>
        </>
    )
}