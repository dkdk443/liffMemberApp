
import styled from 'styled-components';

const Item = styled.li`
  margin: 8px;
  border-radius: 12px;
  height: 240px;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  display: grid;
  grid-template-rows: 180px 1fr;
`;
const ItemImage = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ItemDetail = styled.div`
  padding: 0 20px;
`;

const ShopItem = (props: any) => {
  const { name, price, imagePath } = props.items;
  return (
    <Item>
      <ItemImage style={{ backgroundImage: `url('${imagePath}')` }}></ItemImage>
      <ItemDetail>
        <div
          className="item-name"
          style={{ fontSize: "18px" }}
        >{name}</div>
        <div className="item-price">{price}円<span
          style={{ fontSize: "12px" }}
        >(税込)</span></div>
      </ItemDetail>
    </Item>
  )
}

export default ShopItem