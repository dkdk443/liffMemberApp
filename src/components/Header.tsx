import styled from 'styled-components'

const HeaderMenu = styled.div`
  width: 100vw;
  height: 60px;
  background-image: linear-gradient(90deg, rgba(57, 210, 248, 1), rgba(48, 97, 96, 1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  border-bottom: 3px solid #fff;
`;

const Header = (props: any) => {
  return (
    <HeaderMenu>
      {props.title}
    </HeaderMenu>
  )
}


export default Header