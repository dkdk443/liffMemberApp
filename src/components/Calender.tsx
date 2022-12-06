import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Event } from '../@types/events';

const Calender = (props: { events: Array<Event> }) => {
  const events = props.events;
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      locale="ja"
      nowIndicator={true}
      allDaySlot={false}
      timeZone='local'
      slotMinTime="11:00:00"
      events={events}
      />
  )
}

export default Calender

