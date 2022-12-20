import { useRouteLoaderData } from "react-router-dom";
import { Profile } from "../@types/profile";
import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { amber } from '@mui/material/colors';

const ImageWrapper = styled.div`
  position: absolute; 
  top: -6%;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

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
  width: 100%;
  position: relative;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPageLargeMenu = styled.div`
  margin-top: 40px;
  display: grid;
  justify-content: center;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  width: 300px;
  padding: 20px 0;
  background-color: #f7f7f7;
`;

const Rank = styled.div`
  margin-top: 120px;
  text-align: center;
  font-size: 16px;
`;

export default function MyPage() {
  // @ts-ignore
  const profile: Profile = useRouteLoaderData("root");

  return (
    <MyPageContainer>
      <MyPageCard>
        <ImageWrapper>
          <Avatar
            src={profile.pictureUrl}
            alt={profile.displayName}
            sx={{ width: 100, height: 100 }}
          />
          <div style={{ fontSize: "24px", marginTop: "8px" }}>{profile.displayName ? profile.displayName : ""}</div>
        </ImageWrapper>
        <Rank>
          <MilitaryTechIcon sx={{ color: amber[400] }} />
          {/* TODO: APIからデータ取得する */}
          がんばる毎日会員
        </Rank>
        <MyPageLargeMenu>
          <div style={{
            fontSize: "18px",
            fontWeight: "800"
          }}>
            今月の利用回数
          </div>
          <div>
            <span style={{ fontSize: "40px", marginRight: "8px" }}>4</span>
            <span style={{ fontSize: "14px", marginRight: "8px" }}>回</span>
            <span style={{ marginRight: "8px" }}>/</span>
            <span style={{ marginRight: "8px" }}>30</span>
            <span style={{ marginRight: "8px", fontSize: "14px" }}>回</span>
          </div>
        </MyPageLargeMenu>
      </MyPageCard>
    </MyPageContainer>
  );
}