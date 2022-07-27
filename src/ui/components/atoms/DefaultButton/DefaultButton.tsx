import { IButtonProps } from "./@types";
import {
    StyledButton,
    GradientButton,
    GradientContainer,
    ButtonContainer,
} from './styles'


export default function DefaultText(props: IButtonProps)  {

  return (
    <>
      {props.isGradient ?
        <GradientContainer>
            <GradientButton onClick={props.onClick}>
                {props.children}
            </GradientButton>
        </GradientContainer>
        :
        <ButtonContainer>
          <StyledButton onClick={props.onClick}>
                {props.children}
            </StyledButton>
        </ButtonContainer>
      }
    </>
  )
}
