import MainContentHeader from "@/organisms/MainContentHeader/MainContentHeader";
import { IDashContentProps } from "./@types";
import {
    Container,
} from './styles'


export default function DashContent(props: IDashContentProps) {
  return (
    <Container>
      <MainContentHeader title="Dashboard"/>
    </Container>
  )
}
