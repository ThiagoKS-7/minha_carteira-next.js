import {
    StyledContainer
} from './Container.styles';

interface IContainerProps {
    children: any;
    style?: any;
}

export default function Container(props: IContainerProps ) {
    return (
        <>
            <StyledContainer style={props.style}>
                {props.children}
            </StyledContainer>
        </>
    )
}