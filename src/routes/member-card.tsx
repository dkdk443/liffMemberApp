import QRcodeItem from "../components/QRcode"
import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

const MemberCard = styled.div`
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
`;

export default function MemberCardPage() {
  const profile = useRouteLoaderData("root");
  return (
    <MemberCard>
      <Title>デジタル会員証</Title>
      <QRcodeItem profile={profile} />
    </MemberCard>
  )
}