import { Link } from "react-router-dom";
import styled from "styled-components";
import ShopItem from "../components/ShopItem";
import { ref, getDatabase } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { firebase } from "../firebase/firebaseConfig";
import MenuModal from "../components/MenuModal";

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
const ItemModalBack = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  background-color: #8989891b;
`;

const ItemModal = styled.div`
  background-color: #fff;
  height: 200px;

`;

const database = getDatabase(firebase);
export default function VendingMachine() {
  const [snapshots, loading, error] = useList(ref(database, 'items'));

  if (loading || error) {
    return (<div>読み込み中...</div>);
  } else {
    return (
      <div>
        <Title>自販機</Title>
        <Items>
          {snapshots?.map(item => {
            const itemVal = item.val();
            return (
              <Link to={`./${itemVal.id}`} key={itemVal.id}>
                <ShopItem
                  items={itemVal}
                >
                </ShopItem>
              </Link>
            )
          })}
        </Items>
        <MenuModal />
      </div>
    )
  }
}