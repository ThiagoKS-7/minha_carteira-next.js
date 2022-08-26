import List from "@/molecules/List/List";
import MainContentHeader from "@/organisms/MainContentHeader/MainContentHeader";
import expenses from "data/repositories/expenses";
import { Box } from "@mui/material";
import { IExitsListProps } from "./@types";
import {
    Container,
} from './styles'


export default function ExitsList(props: IExitsListProps) {
  return (
    <Container>
      <MainContentHeader title="Saídas"/>
      <ul style={{height:"fit-content"}}>
        {expenses.map((el) => (
          <Box key={el.key} style={{justifyContent:"center", display:"flex"}}>
            <List  
              tagColor={el.frequency == 'recorrente' ? '#170ac9' : '#E44C4E'}
              title={el.description}
              subtitle={el.frequency}
              amount={el.amount}
            />
          </Box>
        ))}
      </ul>
    </Container>
  )
}
