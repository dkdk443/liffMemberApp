import { useParams, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import { ref, getDatabase, DataSnapshot } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { firebase } from "../firebase/firebaseConfig";
import { ItemType } from "../@types/item-type";

const PriceArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px;
  align-items: center;
`;

const createItemObject = (snapshots: DataSnapshot[] | undefined) => {
  let itemObj: ItemType = {
    id: 0,
    name: "",
    detail: "",
    imagePath: "",
    price: 0
  };
  snapshots?.map(v => {
    switch (v.key) {
      case 'id':
        itemObj.id = v.val();
        break;
      case 'name':
        itemObj.name = v.val();
        break;
      case 'detail':
        itemObj.detail = v.val();
        break;
      case 'imagePath':
        itemObj.imagePath = v.val();
        break;
      case 'price':
        itemObj.price = v.val();
        break;
    }
  })
  return itemObj;
}

const database = getDatabase(firebase);
export default function Item(props: any) {
  const { id } = useParams();

  const [snapshots, loading, error] = useList(ref(database, `items/${Number(id) - 1}`));
  const itemObj = createItemObject(snapshots);

  return (
    <>
      {loading && <span>Loading...</span>}
      {!loading && snapshots && (
        <div>
          <div style={{
            backgroundImage: `url(${itemObj.imagePath}`,
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}></div>
          <h2 style={{
            fontSize: "20px",
            padding: "12px 0"
          }}>{itemObj.name}</h2>
          <p>{itemObj.detail}</p>
          <PriceArea>
            <span style={{ fontSize: "28px", marginRight: "6px" }}>{Number(itemObj.price)}</span>
            <span>円</span>
            (税込)
          </PriceArea>
        </div>
      )
      }
    </>
  )
}