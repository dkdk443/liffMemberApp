import { Outlet } from "react-router-dom";

import LabelBottomNavigation from '../components/LabelBottomNavigation';
import Header from "../components/Header";
import styled from 'styled-components';

const MainContent = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const OutletWrapper = styled.div`
  overflow-y: scroll;
`;

function Root() {
  return (
    <MainContent className="App">
      <Header title={"My Jim"} />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>
  );

}

export default Root