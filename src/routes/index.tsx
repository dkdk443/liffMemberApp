import styled from 'styled-components';
import Calender from '../components/Calender';
import { Event } from '../@types/events';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { amber } from '@mui/material/colors';

const IndexContent = styled.div`
  height: 100%;
  width: 100vw;
`;

const TopItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const TopItem = styled.div`
  background-color: #fff;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  padding: 24px;
  border-radius: 24px;
  margin:12px;
  margin-top: 28px;
`;

const events: Array<Event> = [
  {
    title: '学生クラス',
    daysOfWeek: ['1'],
    startTime: '17:00:00',
    endTime: '17:50:00',
    color: 'green'
  },
  {
    title: '初級クラス',
    daysOfWeek: ['1'],
    startTime: '19:00:00',
    endTime: '19:50:00',
    color: 'green'
  },
  {
    title: '中級クラス',
    daysOfWeek: ['1'],
    startTime: '20:00:00',
    endTime: '21:00:00',
    color: 'blue'
  },
  {
    title: '筋トレ・キックボクシング',
    daysOfWeek: ['2'],
    startTime: '18:50:00',
    endTime: '19:50:00',
    color: 'yellow'
  },
  {
    title: 'レディース',
    daysOfWeek: ['2'],
    startTime: '20:00:00',
    endTime: '21:00:00',
    color: 'pink'
  },
  {
    title: '学生クラス',
    daysOfWeek: ['3'],
    startTime: '17:00:00',
    endTime: '18:00:00',
    color: 'blue'
  },
  {
    title: 'エアキックボクシング',
    daysOfWeek: ['3'],
    startTime: '19:00:00',
    endTime: '19:50:00',
    color: 'orange'
  },
  {
    title: '初級クラス',
    daysOfWeek: ['3'],
    startTime: '20:00:00',
    endTime: '21:00:00',
    color: 'blue'
  },
];

const filterdClass = () => {
  const now = new Date();
  const week = now.getDay();
  const result = events
    .filter(event => event.daysOfWeek.includes(String(week)));
  return result;
}
const todayClasses = filterdClass();

export default function Index() {
  return (
    <IndexContent>
      <div className="hero" style={{ width: "100%", height: "220px", backgroundImage: "url('/demo_jim.webp')", backgroundPosition: "center", backgroundSize: "cover"}}>
      </div>
      <TopItems>
        <TopItem>
          <h3 style={{fontSize: "14px", paddingBottom: "8px"}}>本日のクラス</h3>
          <ul style={{ fontSize: "18px" }}>
            {todayClasses.map(item => {
              return (
                <li style={{ padding: "8px 0"}}>
                  <div>{item.title}</div>
                  <div><AccessTimeIcon  fontSize="small" sx={{ color: amber[400] }}/> { item.startTime.substring(0,5)} - { item.endTime.substring(0,5) }</div>
                </li>
              )
            })}
          </ul>
        </TopItem>
      </TopItems>
      <div className="calender" style={{ marginTop: "60px" }}>
        <h2 style={{ fontWeight: "800" , paddingBottom: "8px"}}>クラススケジュール</h2>
        <Calender events={ events } />
      </div>
   </IndexContent>
  );
}