import liff from '@line/liff/dist/lib';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../App.scss';

import LabelBottomNavigation from '../components/LabelBottomNavigation';
import styled from 'styled-components';
import QRcode from '../components/QRcode';
import { Profile } from '../@types/profile';

let isLoading = false;

const isLiffInClient = liff.isInClient();
let liffId = import.meta.env.VITE_REACT_APP_LIFF_ID

let profile =
  {
    'lineUserId': '',
    'lineDisplayName': '',
    'linePictureUrl': '',
}

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
          lineUserId: resp.userId,
          lineDisplayName: resp.displayName,
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
      <QRcode lineUserId={profile.lineUserId ? profile.lineUserId : "000000"} />
      <LabelBottomNavigation></LabelBottomNavigation>
    </MainContent>
  );

  liffInit()
    .then(() => {
      getProfile().then(resp => {
        // alert(JSON.stringify(resp));
        // profile.lineDisplayName = resp.displayName;
        // profile.lineUserId = resp.userId;
        // profile.linePictureUrl = resp.pictureUrl
        // alert('AA:::' + JSON.stringify(profile));
        
      }).then(() => {
        return (
          <h1>Hello</h1>
          // <MainContent className="App">
          //   <Outlet />
          //   <div className="">{profile.lineDisplayName}</div>
          //   <QRcode lineUserId={profile.lineUserId} />
          //   <LabelBottomNavigation></LabelBottomNavigation>
          // </MainContent>
        )
      });
    });
  //   .then(() => {
  //     isLoading = false;
  //     return (
  //       <MainContent className="App">
  //         <Outlet />
  //         <div className="">{ profile.lineDisplayName }</div>
  //         <QRcode lineUserId={ profile.lineUserId } />
  //         <LabelBottomNavigation></LabelBottomNavigation>
  //       </MainContent>
  //     )
  // })
}

export default Root

// export default function Root() {
//   return (
//     <>
//       <div id="sidebar">
//         <h1>React Router Contacts</h1>
//         <div>
//           <form id="search-form" role="search">
//             <input
//               id="q"
//               aria-label="Search contacts"
//               placeholder="Search"
//               type="search"
//               name="q"
//             />
//             <div
//               id="search-spinner"
//               aria-hidden
//               hidden={true}
//             />
//             <div
//               className="sr-only"
//               aria-live="polite"
//             ></div>
//           </form>
//           <form method="post">
//             <button type="submit">New</button>
//           </form>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href={`contacts/1`}>Your Name</a>
//             </li>
//             <li>
//               <a href={`contacts/2`}>Your Friend</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div id="detail">
//         <Outlet />
//       </div>
//     </>
//   );
// }