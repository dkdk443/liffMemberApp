import React from 'react'
import styled from 'styled-components'

const HeaderMenu = styled.div`
  width: 100vw;
  height: 40px;
`;

const Header = (props: any) => {
  return (
    <HeaderMenu>
      { props.title }
    </HeaderMenu>
  )
}

export default Header