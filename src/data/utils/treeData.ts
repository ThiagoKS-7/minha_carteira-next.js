import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import router from 'next/router';
export const treeData =  [
    {
      key: "0",
      icon: DashboardIcon,
      label: "Dashboard",
      onClick: () => {
        router.push("/?value=1", undefined, {shallow:true});
      }    
    },
    {
      key: "1",
      icon: InsightsIcon,
      label: "Gerenciar movimentações",
      children: [
        {
          key: "1-0",
          icon: AccountBalanceWalletIcon,
          label: "Novo registro",
        },
        {
          key: "1-1",
          icon: ArrowUpwardIcon,
          label: "Entradas",
          onClick: () => {
            router.push("/?value=3", undefined, {shallow:true});
          }    
        },
        {
            key: "1-2",
            icon: ArrowDownwardIcon,
            label: "Saídas",
        },
      ],
    },
    {
      key: "2",
      icon: ExitToAppIcon,
      label: "Sair",
      onClick: () => {
        router.push("/sign_in/login");
      }        
    },
  ];