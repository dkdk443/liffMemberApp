import { useQRCode } from 'next-qrcode';
import styled from 'styled-components';
import Loading from './Loading';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333333;
  background-color: #f4f4f4;
  font-size: 30px;
  min-width: 300px;
  min-height: 300px;
  border-radius: 3px;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  border-radius: 20px;
  font-size: 16px;
`;

const QRcode = (props: any) => {
  let lineUserId = props.profile.userId;
  const { Canvas } = useQRCode();

  if (!lineUserId) {
    return (
      <Loading />
    )
  } else {
    return (
      <Card>
        <Canvas
          text={lineUserId}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 240,
            color: {
              // dark: '#010599FF',
              light: '#FFF',
            },
          }}
        />
        {/* <div>{ lineUserId }</div> */}
      </Card>
    )
  }

}

export default QRcode