import QRcode from "../components/QRcode"
import { useRouteLoaderData } from "react-router-dom";

export default function MemberCardPage() { 
  const profile = useRouteLoaderData("root");
  return (
    <div id="member-card">
      <QRcode profile={profile} />
    </div>
  )
}