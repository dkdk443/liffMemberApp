import { Outlet } from "react-router-dom";
import '../App.scss';

import LabelBottomNavigation from '../components/LabelBottomNavigation';
import Header from "../components/Header";
import styled from 'styled-components';

function Root() {
  const MainContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <MainContent className="App">
      <Header title={"My Jim"} />
      <Outlet />
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>
  );

}

export default Root