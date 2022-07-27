import Grid from "@/atoms/MainContainer/MainContainer";
import type { NextPage } from 'next';

import MainHeader from "@/organisms/Dashboard/MainHeader/MainHeader";
import Aside from "@/organisms/Dashboard/MainAside/MainAside";
import MainContent from "@/organisms/Dashboard/MainContent/MainContent";

const Home: NextPage = () => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <MainContent />
    </Grid>
  )
}

export default Home
