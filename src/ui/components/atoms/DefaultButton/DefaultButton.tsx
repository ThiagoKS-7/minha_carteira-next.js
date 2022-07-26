import { IButtonProps } from "./@types";
import router from 'next/router';
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
            <GradientButton onClick={() => router.push("/sign_in/register")}>
                {props.children}
            </GradientButton>
        </GradientContainer>
        :
        <ButtonContainer>
          <StyledButton onClick={() => router.push("/")}>
                {props.children}
            </StyledButton>
        </ButtonContainer>
      }
    </>
  )
}
