import styled from 'styled-components';
import Calender from '../components/Calender';

const IndexContent = styled.div`
  height: 100%;
  width: 100vw;
`;

const TopItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TopItem = styled.div`
  background-color: #fff;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  padding: 24px;
  border-radius: 24px;
  margin:12px;
`;

export default function Index() {
  return (
    <IndexContent>
      <div className="hero" style={{ width: "100%", height: "220px", backgroundImage: "url('https://placehold.jp/400x300.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
      </div>
      荻窪店のクラスを表示中
      <TopItems>
        <TopItem>
          <h3 style={{fontSize: "14px", fontWeight: "bold"}}>ただいまのクラス</h3>
          <div style={{fontSize: "18px"}}>レディースクラス</div>
          {/* ただいま開催中のクラスはありません */}
        </TopItem>
          <TopItem>
          <h3 style={{fontSize: "14px", fontWeight: "bold"}}>次のクラス</h3>
          <div style={{fontSize: "18px", fontWeight: "bold"}}> 初心者クラス
          </div>
          <div style={{ fontSize: "12px", fontWeight: "bold" }}>17:00~</div>
        </TopItem>
      </TopItems>
      <div className="calender" style={{ marginTop: "60px" }}>
        <h2>クラススケジュール</h2>
        <Calender/>
      </div>
   </IndexContent>
  );
}