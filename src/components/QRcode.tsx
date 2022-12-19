import QRCode from 'react-qr-code';
import styled from 'styled-components';
import Loading from './Loading';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333333;
  font-size: 30px;
  min-width: 300px;
  min-height: 300px;
  border-radius: 3px;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  border-radius: 20px;
  font-size: 16px;
`;

const QRcodeItem = (props: any) => {
  let lineUserId = props.profile.userId;

  if (!lineUserId) {
    return (
      <Loading />
    )
  } else {
    return (
      <Card>
        <QRCode
          value={lineUserId}
          size={256}
          style={{ height: "auto", maxWidth: "200px", width: "200px" }}
          viewBox={`0 0 256 256`}
        />
        {/* <div>{ lineUserId }</div> */}
      </Card>
    )
  }

}

export default QRcodeItem