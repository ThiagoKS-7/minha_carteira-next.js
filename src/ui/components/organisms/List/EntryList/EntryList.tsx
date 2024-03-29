import MainContentHeader from "@/organisms/MainContentHeader/MainContentHeader";
import { IEntryListProps } from "./@types";
import gains from "data/repositories/gains";
import {
    Container,
} from './styles'
import List from "@/molecules/List/List";
import { Box } from "@mui/material";


export default function EntryList(props: IEntryListProps) {
  return (
    <Container>
      <MainContentHeader title="Entradas"/>
      <ul style={{height:"fit-content"}}>
        {gains.map((el) => (
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
