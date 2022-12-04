import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const LabelBottomNavigation = () => {
  const Nav = styled.div`
    width: 100vw;
    background-color: #3371a7;
    color: #fff;
  `;

  const ButtonList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

  type NavItem = {
    id: number;
    path: string;
    iconName: string;
    label: string;
  }

  const navigations:Array<NavItem> = [
    {
      id: 1,
      path: "/",
      iconName: "home",
      label: "Home"
    },
     {
      id: 2,
      path: "/member-card",
      iconName: "qr_code",
      label: "会員証"
    },
     {
      id: 3,
      path: "/contact",
      iconName: "mail_outline",
      label: "お問い合わせ"
    },
      {
      id: 4,
      path: "/my-page",
      iconName: "sentiment_satisfied_alt",
      label: "マイページ"
    },
  ];

  return (
    <Nav>
      <ButtonList>
        {navigations.map(nav => {
            return(
              <Link to={nav.path} key={nav.id}>
                <ButtonItem>
                  <Icon>{ nav.iconName }</Icon>
                  <div className=""> {nav.label}</div>
                </ButtonItem>
              </Link>
            )
          })}
      </ButtonList>
    </Nav>
  )
}

export default LabelBottomNavigation