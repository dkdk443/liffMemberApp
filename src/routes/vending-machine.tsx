import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import ShopItem from "../components/ShopItem";
import { useEffect } from "react";
import { ref, getDatabase } from 'firebase/database';
import { useList, useObject } from 'react-firebase-hooks/database';
import { firebase } from "../firebase/firebaseConfig";
const Items = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
`;

const database = getDatabase(firebase);
export default function VendingMachine() {
  const [snapshots, loading, error] = useList(ref(database, 'items'));

  console.log(loading);
  console.log(error);
  if (loading) {
    return (<div>読み込み中...</div>);
  }
  return (
    <div>
      <Title>自販機</Title>
      <Items>
        {snapshots?.map(item => {
          const itemVal = item.val();
          return (
            <ShopItem items={itemVal} key={itemVal.id}>
            </ShopItem>
          )
        })}
      </Items>
    </div>
  )
}