import { useRouteLoaderData } from "react-router-dom";
import { Profile } from "../@types/profile";
import styled from 'styled-components';

export default function MyPage() {
  // @ts-ignore
  const profile: Profile = useRouteLoaderData("root");

  const ImageWrapper = styled.div`
    position: absolute; 
    top: -6%;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  const ProfileImage = styled.img`
    border-radius: 50%;
    box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
    margin-bottom: 20px;
  `;

  const MyPageContainer = styled.div`
    background-image: linear-gradient(90deg, rgba(57, 210, 248, 1), rgba(48, 97, 96, 1));
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  `;

  const MyPageCard = styled.div`
    box-shadow: -2px -8px 15px -12px rgba(13, 13, 13, 0.5);
    border-radius: 40px 40px 0 0;
    height: 72vh;
    width: 100vw;
    position: relative;
    background-color: #ffffff;
  `;

  return (
    <MyPageContainer>
      <MyPageCard>
        <ImageWrapper>
          <ProfileImage src={profile.pictureUrl ? profile.pictureUrl : ""} alt="" width="90px" height="90px" />
          <div className="">{profile.displayName ? profile.displayName : ""}</div>
        </ImageWrapper>
      </MyPageCard>
   </MyPageContainer>
  );
}