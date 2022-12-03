import { Outlet, useRouteLoaderData } from "react-router-dom";
import '../App.scss';

import LabelBottomNavigation from '../components/LabelBottomNavigation';
import styled from 'styled-components';

function Root() {
   // @ts-ignore
  const profile = useRouteLoaderData("root");

  const MainContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <MainContent className="App">
      <Outlet />
      {/* <img src={profile.pictureUrl ? profile.pictureUrl : "" } alt="" width="80px" height="80px" />
      <div className="">{profile.displayName ? profile.displayName : "" } さま</div> */}
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>
  );

}

export default Root