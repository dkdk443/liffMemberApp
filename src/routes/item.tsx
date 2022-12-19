import { Link, NavigateFunction, useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import { ref, getDatabase, DataSnapshot } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { firebase } from "../firebase/firebaseConfig";
import { ItemType } from "../@types/item-type";
import { Add } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/slice/cartSlice";

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 70px;
  height: 100%;
`;

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
    price: 0,
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
  const [snapshots, loading] = useList(ref(database, `items/${Number(id) - 1}`));
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState(createItemObject(snapshots));
  const itemObj = createItemObject(snapshots);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItem(cartItem);
  }, [quantity]);

  return (
    <ItemContainer>
      {loading && <Loading />}
      {!loading && snapshots && (
        <>
          <div>
            <div style={{
              backgroundImage: `url(${itemObj.imagePath}`,
              height: "300px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}></div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px"
            }}>
              <div style={{
                fontSize: "22px",
                padding: "12px 0",
                fontWeight: "bold"
              }}>{itemObj.name}</div>
              <p>{itemObj.detail}</p>
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0"
              }}>
                {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="quantity-label">数量</InputLabel>
                  <Select
                    labelId="quantity-label"
                    id="quantity-select"
                    value={quantity}
                    label="数量"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl> */}
                <PriceArea>
                  <span style={{ fontSize: "28px", marginRight: "6px" }}>{Number(itemObj.price)}</span>
                  <span>円</span>
                  (税込)
                </PriceArea>
              </div>
            </div>
          </div>
          <div
            className="button-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Link to="/shop/cart">
              <Button
                variant="contained"
                color="warning"
                style={{
                  width: "300px",
                  marginBottom: "16px"
                }}
                // @ts-ignore
                onClick={() => dispatch(addCart({ ...itemObj, ...{ quantity: Number(quantity) } }))}
              >
                <Add />
                カートに追加する
              </Button>
            </Link>
          </div>

        </>
      )}

      <div />

    </ItemContainer>
  )
}