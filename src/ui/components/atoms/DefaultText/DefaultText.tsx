import { ITitleProps } from "./@types";
import {
    SubTitleContent,
    TitleContent,
} from './styles'


export default function DefaultText(props: ITitleProps)  {
  return (
    <>
      {props.isTitle ?
        <TitleContent>
          {props.children}
        </TitleContent>
        :
        <SubTitleContent>
          {props.children}
        </SubTitleContent>
      }
    </>
  )
}
