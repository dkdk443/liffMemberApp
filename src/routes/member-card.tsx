import QRcode from "../components/QRcode"
import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
export default function MemberCardPage() { 
  const profile = useRouteLoaderData("root");
  return (
    <div id="member-card">
      <CardTitle>デジタル会員証</CardTitle>
      <QRcode profile={profile} />
    </div>
  )
}