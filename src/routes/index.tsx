import styled from 'styled-components';
import Calender from '../components/Calender';
import { Event } from '../@types/event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { amber } from '@mui/material/colors';

const IndexContent = styled.div`
  height: 100%;
  width: 100vw;
`;

const Hero = styled.div`
  background-image: url(https://3.bp.blogspot.com/-kiS5brGnbvg/WwJaMNGXovI/AAAAAAABMKk/lizbXhrVHDAX7sjNBOkFMte62WVdVyCBQCLcBGAs/s400/gym_aerobike_people.png);
  height: 240px;
  width: 100vw;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TopItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const TopItem = styled.div`
  background-color: #fff;
  box-shadow: 0px 5px 15px 0px rgba(13, 13, 13, 0.35);
  border-radius: 18px;
  margin: 12px;
  margin-top: 28px;
`;

const events: Array<Event> = [
  {
    id: 1,
    title: '学生クラス',
    daysOfWeek: ['1', '3', '5'],
    startTime: '17:00:00',
    endTime: '17:50:00',
    color: 'green'
  },
  {
    id: 2,
    title: '初級クラス',
    daysOfWeek: ['1'],
    startTime: '19:00:00',
    endTime: '19:50:00',
    color: 'green'
  },
  {
    id: 3,
    title: '中級クラス',
    daysOfWeek: ['1'],
    startTime: '20:00:00',
    endTime: '21:00:00',
    color: 'blue'
  },
  {
    id: 4,
    title: '筋トレ・キックボクシング',
    daysOfWeek: ['2'],
    startTime: '18:50:00',
    endTime: '19:50:00',
    color: 'yellow'
  },
  {
    id: 5,
    title: 'レディース',
    daysOfWeek: ['2', '4'],
    startTime: '20:00:00',
    endTime: '21:00:00',
    color: 'pink'
  },
  {
    id: 6,
    title: 'エアキックボクシング',
    daysOfWeek: ['3', '5'],
    startTime: '19:00:00',
    endTime: '19:50:00',
    color: 'orange'
  },
  {
    id: 7,
    title: '初級クラス　マススパー',
    daysOfWeek: ['3'],
    startTime: '20:00:00',
    endTime: '21:00:00',
    color: 'blue'
  },
  {
    id: 8,
    title: '中級クラス',
    daysOfWeek: ['4'],
    startTime: '18:50:00',
    endTime: '19:50:00',
    color: 'blue'
  },
  {
    id: 9,
    title: '初級クラス',
    daysOfWeek: ['6'],
    startTime: '16:00:00',
    endTime: '16:50:00',
    color: 'green'
  },
  {
    id: 10,
    title: '中級クラス',
    daysOfWeek: ['6'],
    startTime: '18:30:00',
    endTime: '19:30:00',
    color: 'blue'
  },
  {
    id: 11,
    title: 'ハタヨガ',
    daysOfWeek: ['6'],
    startTime: '19:40:00',
    endTime: '20:40:00',
    color: 'pink'
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
      <Hero></Hero>
      <TopItems>
        <TopItem style={{ padding: "20px" }}>
          <h3 style={{ fontSize: "18px", paddingBottom: "8px" }}>本日のクラス</h3>
          <ul style={{ fontSize: "16px" }}>
            {todayClasses.map(item => {
              return (
                <li style={{ padding: "8px 0" }} key={Number(item.id)}>
                  <div>{item.title}</div>
                  <div><AccessTimeIcon fontSize="small" sx={{ color: amber[400] }} /> {item.startTime.substring(0, 5)} - {item.endTime.substring(0, 5)}</div>
                </li>
              )
            })}
          </ul>
        </TopItem>
      </TopItems>
      <TopItems>
        <TopItem>
          <div className="calender">
            <h3 style={{ fontSize: "18px", fontWeight: "800", padding: "20px" }}>クラススケジュール</h3>
            <Calender events={events} />
          </div>
        </TopItem>
      </TopItems>
    </IndexContent>
  );
}