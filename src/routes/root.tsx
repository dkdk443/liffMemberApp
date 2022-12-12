import { Outlet } from "react-router-dom";

import LabelBottomNavigation from '../components/LabelBottomNavigation';
import Header from "../components/Header";
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const OutletWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

function Root() {
  return (
    <MainContent className="App">
      <Header title={"demo Jim"} />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>
  );

}

export default Root