import DashContent from '@/organisms/Dashboard/DashContent/DashContent';
import EntryList from '@/organisms/List/EntryList/EntryList';
import ExitsList from '@/organisms/List/ExitsList/ExitsList';
import { Box } from '@mui/material';
import { useRouter } from 'next/router'

export default function Router() {
  const router = useRouter();
  const components: any = {
    "1":DashContent,
    "2":DashContent,
    "3":EntryList,
    "4":ExitsList,
    "5":DashContent,
    "6":DashContent,
  };
  return (
    <Box component={components[router.query.value as string]}/>
  )
}