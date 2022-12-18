export type CartType = {
  items: CartItem[];
}

export type CartItem = {
  id: number;
  name: string;
  detail: string;
  imagePath: string;
  price: number;
  quantity: number;
}