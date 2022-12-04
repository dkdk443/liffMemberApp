import { useRouteLoaderData } from "react-router-dom";
import { Profile } from "../@types/profile";
import styled from 'styled-components';


export default function Index() {
  // @ts-ignore
  const profile: Profile = useRouteLoaderData("root");

  const ProfileImage = styled.img`
    border-radius: 50%;
  `;
  return (
    <div>
      <ProfileImage src={profile.pictureUrl ? profile.pictureUrl : "" } alt="" width="90px" height="90px" />
      <div className="">名前：{profile.displayName ? profile.displayName : "" }</div>
   </div>
  );
}