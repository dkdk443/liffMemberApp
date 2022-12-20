import styled from "styled-components";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Key, useState } from "react";
import { CartItem } from "../@types/cart";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/slice/cartSlice";
import { AlertDialog } from "../components/AlertDialog";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
`;

const TotalPriceArea = styled.div`
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 8px 12px;
  min-width: 300px;
  align-items: center;
`;

function getTotalPrice(cartItems: CartItem[]): number {
  return cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

export default function Cart(props: any) {
  // @ts-ignore
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = getTotalPrice(cart);

  const [open, setOpen] = useState(false);

  const showComfirmModal = (arg0: boolean) => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Title>カート</Title>
      <CartContainer>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            height: 400,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {cart.map((item: CartItem, i: Key) => (
            <ListItem
              key={i}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  // @ts-ignore
                  onClick={() => dispatch(removeCart(item))}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar src={item.imagePath}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={`${item.price} 円　× ${item.quantity}`} />
            </ListItem>
          ))
          }
        </List>

        <div
          className="button-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TotalPriceArea>
            <div>合計</div>
            <div><span style={{ fontSize: "22px" }}>{totalPrice}</span>円<span style={{ fontSize: "12px" }}>（税込）</span></div>
          </TotalPriceArea>
          <Button
            variant="contained"
            color="warning"
            style={{
              width: "300px",
              marginBottom: "16px"
            }}
            onClick={() => showComfirmModal(true)}
          >
            <PaymentIcon />
            決済に進む
          </Button>
          <AlertDialog dialogs={{ open: open, setOpen: setOpen, onClose: handleClose, title: '決済に進みますか？', content: "", price: totalPrice }} />
        </div>

        <div />

      </CartContainer>
    </>
  )
}