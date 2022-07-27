import DefaultTreeItem from "@/atoms/DefaultTreeItem/DefaultTreeItem";
import TreeView from "@/organisms/Dashboard/TreeView/TreeView";
import { IAsideProps } from "./@types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Insights from '@mui/icons-material/Insights';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExitIcon from '@mui/icons-material/ExitToApp';

import {
  Container,
  LogoName,
  ImageWrapper,
} from './styles'
import router from "next/router";


export default function MainAside(props: IAsideProps) {
  return (
    <Container>
      <ImageWrapper>
        <LogoName src="Images/logo-name.png" />
      </ImageWrapper>
      <TreeView>
        <DefaultTreeItem nodeId="1" labelText="Dashboard" labelIcon={DashboardIcon} color="#1a73e8" bgColor="#f1f4f2" onClick={()=>{router.push("/sign_in/login")}}/>
        <DefaultTreeItem nodeId="2" labelText="Gerenciar Insights" labelIcon={Insights}>
        <DefaultTreeItem
          nodeId="4"
          labelText="Novo registro"
          labelIcon={AccountBalanceWalletIcon}
          color="#3c8039"
          bgColor="#e8f0fe"
          onClick={()=>{router.push("/sign_in/login")}}
        />
        <DefaultTreeItem
          nodeId="5"
          labelText="Entradas"
          labelIcon={ArrowUpwardIcon}
          color="#a250f5"
          bgColor="#fcefe3"
          onClick={()=>{router.push("/sign_in/login")}}
        />
        <DefaultTreeItem
          nodeId="6"
          labelText="Saídas"
          labelIcon={ArrowDownwardIcon}
          color="#e3742f"
          bgColor="#f3e8fd"
          onClick={()=>{router.push("/sign_in/login")}}
        />
      </DefaultTreeItem>
        <DefaultTreeItem
          nodeId="3"
          labelText="Sair"
          labelIcon={ExitIcon}
          color="#e81a1a"
          bgColor="#e6f4ea"
          onClick={()=>{router.push("/sign_in/login")}}
        />
      </TreeView>
    </Container>
  )
}
