import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

export default function VendingMachine() {
  const profile = useRouteLoaderData("root");
  return (
    <div>
      <h2>Comming Soon...</h2>
    </div>
  )
}