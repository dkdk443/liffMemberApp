import QRcode from "../components/QRcode"
import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

const MemberCard = styled.div`
  height: 100%;
`;

const CardTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;

export default function MemberCardPage() { 
  const profile = useRouteLoaderData("root");
  return (
    <MemberCard>
      <CardTitle>デジタル会員証</CardTitle>
      <QRcode profile={profile} />
    </MemberCard>
  )
}