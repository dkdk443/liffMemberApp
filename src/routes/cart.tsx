import styled from "styled-components";
import { Button } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartContainer = styled.div`
  position: relative;

`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
`;


export default function Cart(props: any) {
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
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        </List>
        <div
          className="button-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute"
          }}
        >
          <Button
            variant="contained"
            color="warning"
            style={{
              width: "300px",
              marginBottom: "16px"
            }}
          >
            <PaymentIcon />
            決済に進む
          </Button>
        </div>

        <div />

      </CartContainer>
    </>
  )
}