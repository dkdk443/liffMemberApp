import React from 'react'
import styled from 'styled-components';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const LabelBottomNavigation = () => {
  const Nav = styled.div`
    width: 100vw;
    background-color: #3371a7;
    color: #fff;
  `;

  const ButtonList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;

  const ButtonItem = styled.div`
    font-size: 10px;
    height: 60px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 8px;
    text-align: center;
    align-items: center;
  `;

  return (
    <Nav>
      <ButtonList>
        <ButtonItem>
          <EventSeatIcon />
          予約
        </ButtonItem>
        <ButtonItem>
          <QrCodeIcon />
          会員証</ButtonItem>
        <ButtonItem>
          <SentimentSatisfiedAltIcon />
          マイページ
        </ButtonItem>
        <ButtonItem>
          <MailOutlineIcon/>
          お問い合わせ
        </ButtonItem>
        <ButtonItem>
          <ShoppingBagIcon/>
          SHOP
        </ButtonItem>
      </ButtonList>
    </Nav>
  )
}

export default LabelBottomNavigation