import { useRouter } from 'next/router'
import Router from "routes/Router";
import DashContent from "../DashContent/DashContent";
import { IMainContentProps } from "./@types";
import {
    Container,
} from './styles'


export default function MainContent(props: IMainContentProps) {
    const router = useRouter();
  return (
    <Container>
      {router.query.value ? <Router/> : <DashContent/>} 
    </Container>
  )
}
