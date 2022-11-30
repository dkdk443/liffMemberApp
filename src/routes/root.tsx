import liff from '@line/liff/dist/lib';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../App.scss';

import LabelBottomNavigation from '../components/LabelBottomNavigation';
import styled from 'styled-components';
import QRcode from '../components/QRcode';
import { Profile } from '../@types/profile';

let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID

const liffInit = () => {
  return new Promise<void>((resolve, reject) => {
    liff.init({
      liffId: liffId || '',
      withLoginOnExternalBrowser: true
    })
      .then(() => {
        // alert('liff is init');
        resolve();
    })
      .catch((e) => {
      //  alert('liff is not init');
      console.log(`LIFF error: ${e.message}`);
      reject(e);
    })
  })
}

const getProfile = () => {
  return new Promise((resolve, reject) => {
    liff.getProfile()
      .then(result => {
        resolve(result);
      })
      .catch(e => {
        reject(e);
    })
  })
}

function Root() {
  const [profile, setProfile] = useState<Profile>({
    lineDisplayName: "",
    lineUserId: "",
    linePictureUrl: "",
  });

  const MainContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  useEffect(() => {
    liffInit().then(() => {
      getProfile().then(resp => {
        setProfile({
          // @ts-ignore
          lineUserId: resp.userId,
          // @ts-ignore
          lineDisplayName: resp.displayName,
          // @ts-ignore
          linePictureUrl: resp.pictureUrl
        });
      })
    })
  }
    , []);
  return (
    <MainContent className="App">
      <Outlet />
      <img src={profile.linePictureUrl ? profile.linePictureUrl : "" } alt="" width="80px" height="80px" />
      <div className="">{profile.lineDisplayName ? profile.lineDisplayName : "" } さま</div>
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>
  );

}

export default Root