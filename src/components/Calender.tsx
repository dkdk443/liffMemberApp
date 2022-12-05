import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calender = () => {
    return (
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        locale="ja"
        nowIndicator={true}
        allDaySlot={false}
        timeZone='local'
        slotMinTime="11:00:00"
        events={[
          {
            title: '学生クラス',
            groupId: 'blueEvents',
            daysOfWeek: [ '1' ],
            startTime: '17:00:00',
          },
          {
            title: '初級クラス',
            daysOfWeek: [ '1' ],
            startTime: '19:00:00',
            endTime: '19:50:00',
            color: 'green'
          },
          {
            title: '中級クラス',
            daysOfWeek: [ '1' ],
            startTime: '20:00:00',
            endTime: '21:00:00',
            color: 'blue'
          },
          {
            title: '筋トレ・キックボクシング',
            daysOfWeek: [ '2' ],
            startTime: '18:50:00',
            endTime: '19:50:00',
            color: 'yellow'
          },
          {
            title: 'レディース',
            daysOfWeek: [ '2' ],
            startTime: '20:00:00',
            endTime: '21:00:00',
            color: 'pink'
          },
          {
            title: '学生クラス',
            daysOfWeek: [ '3' ],
            startTime: '17:00:00',
            endTime: '18:00:00',
            color: 'blue'
          },
          {
            title: 'エアキックボクシング',
            daysOfWeek: [ '3' ],
            startTime: '19:00:00',
            endTime: '19:50:00',
            color: 'orange'
          },
          {
            title: '初級クラス',
            daysOfWeek: [ '3' ],
            startTime: '20:00:00',
            endTime: '21:00:00',
            color: 'blue'
          },
        ]}
       />
    )
}

export default Calender
