import Text from '@/atoms/DefaultText/DefaultText';
import { ILoginTitlePairProps } from "./@types";
import {
    PairContainer,
} from './styles'


export default function LoginPair(props: ILoginTitlePairProps) {
  return (
    <PairContainer>
      <Text isTitle={true}>
        {props.title}
      </Text>
      <Text isTitle={false}>
        {props.subtitle}
      </Text>
    </PairContainer>
  )
}
