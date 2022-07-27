import Text from '@/atoms/DefaultText/DefaultText';
import { Box } from '@mui/material';
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
      <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
        <Text isTitle={false}>
          {props.subtitle}
        </Text>
      </Box>
    </PairContainer>
  )
}
