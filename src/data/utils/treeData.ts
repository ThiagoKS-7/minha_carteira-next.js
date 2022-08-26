import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
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
      label: "Administração",
      children: [
        {
          key: "1-0",
          icon: AccountBalanceWalletIcon,
          label: "Novo registro",
          onClick: () => {
            router.push("/?value=2", undefined, {shallow:true});
          }  
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
            onClick: () => {
              router.push("/?value=4", undefined, {shallow:true});
            } 
        },
        {
          key: "1-3",
          icon: DeleteIcon,
          label: "Remover Registro",
          onClick: () => {
            router.push("/?value=5", undefined, {shallow:true});
          }        
        },
      ],
    },
    {
      key: "2",
      icon: SettingsIcon,
      label: "Configurações", 
      onClick: () => {
        router.push("/?value=6", undefined, {shallow:true});
      }    
    },
    {
      key: "3",
      icon: ExitToAppIcon,
      label: "Sair",
      onClick: () => {
        router.push("/sign_in/login");
      }        
    },
  ];