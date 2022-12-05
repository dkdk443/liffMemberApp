import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import liff from '@line/liff/dist/lib';
liff

const Nav = styled.div`
  width: 100vw;
  background-image: linear-gradient(90deg, rgba(57, 210, 248, 1), rgba(48, 97, 96, 1));
  color: #fff;
  border-radius: 28px;
`;

const ButtonList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ButtonItem = styled.div`
  font-size: 12px;
  height: 80px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
  align-items: center;
`;

const LabelBottomNavigation = () => {
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

// iPhoneX~をセーフエリアが必要だとする 
  const isNeedSafeArea = navigator.userAgent.match(/iPhoneX/i) ? true : false;

// Safari判定　　参考：https://tagsqa.com/detail/9178　
  const isSafari = navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;
  // liffブラウザ上で動作しているか
  const isInLiffClient = liff.isInClient

  return (
    <Nav style={isNeedSafeArea && (isSafari || isInLiffClient) ? { paddingBottom: 'calc(env(safe-area-inset-bottom) + 44px)'} : {paddingBottom: '0px'}}>
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