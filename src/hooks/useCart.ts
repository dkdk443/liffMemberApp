import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../@types/cart';

export const useCart = () => {
  const [cookies, setCookie] = useCookies(['cart']);
  const [cart, setCart] = useState<CartItem[]>(cookies.cart || []);
  const totalQuantity = cart.reduce((acc: any, cur: { quantity: Number; }) => acc + cur.quantity, 0);
  const navigate = useNavigate();

  const addCart = (cartItem: CartItem, quantity: number) => {
    const newCartItem = { ...cartItem, quantity };
    setCart([...cart, newCartItem]);
    navigate('/shop/cart');
  }

  useEffect(() => {
    setCookie('cart', JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    addCart,
    totalQuantity,
  };
};
