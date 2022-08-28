import Card from "@/molecules/Card/Card";
import MainContentHeader from "@/organisms/MainContentHeader/MainContentHeader";
import { IDashContentProps } from "./@types";
import {
    Container,
} from './styles'

export default function DashContent(props: IDashContentProps) {
  return (
    <Container>
      <MainContentHeader title="Dashboard"/>
      <div style={{flexWrap:'wrap', marginTop: '3.5em',display: 'flex', justifyContent: 'space-evenly'}}>
        <Card 
          title="Saldo" 
          amount={250} 
          icon="dollar"
          color="#4E41F0" 
          obs="atualizado com base nas entradas e saídas"
        />
        <Card 
          title="Entradas" 
          amount={5000} 
          icon="entries"
          color="#F7931B" 
          obs="última movimentação em 18/07/2020 às 11h40"
        />
        <Card 
          title="Saídas" 
          amount={4750} 
          icon="exits"
          color="#E44C4E"
          obs="última movimentação em 18/07/2020 às 11h40"
        />
      </div>
    </Container>
  )
}
