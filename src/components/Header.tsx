import React from 'react'
import styled from 'styled-components'

const Header = (props: any) => {
  const HeaderMenu = styled.div`
    width: 100vw;
    height: 40px;
  `;
  return (
    <HeaderMenu>
      { props.title }
    </HeaderMenu>
  )
}

export default Header