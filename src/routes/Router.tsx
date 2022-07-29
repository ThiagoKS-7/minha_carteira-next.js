import DashContent from '@/organisms/Dashboard/DashContent/DashContent';
import EntryList from '@/organisms/List/EntryList/EntryList';
import { Box } from '@mui/material';
import { useRouter } from 'next/router'

export default function Router() {
  const router = useRouter();
  const components: any = {
    "1":DashContent,
    "2":DashContent,
    "3":EntryList,
    "4":DashContent,
  };
  return (
    <Box component={components[router.query.value as string]}/>
  )
}