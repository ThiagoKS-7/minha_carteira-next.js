import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
import Tree from '@/molecules/Tree/Tree';
import { treeData } from 'data/utils/treeData';


export default function MainAside(props: IAsideProps) {
  return (
    <Container>
      <ImageWrapper>
        <LogoName src="Images/logo-name.png" />
      </ImageWrapper>
      <Tree treeData={treeData}/>
     
    </Container>
  )
}
