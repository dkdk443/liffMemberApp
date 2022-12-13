import '@fullcalendar/react/dist/vdom';
import FullCalendar, { EventClickArg } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Event } from '../@types/event';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "16px"
};

const Calender = (props: { events: Array<Event> }) => {
  const [calenderId, setCalenderId] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (info: EventClickArg) => {
    setCalenderId(Number(info.event.id));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const events = props.events;

  const targetEvent = events.find(event =>
    event.id === calenderId
  );

  return (
    <>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        locale="ja"
        nowIndicator={true}
        allDaySlot={false}
        timeZone='local'
        slotMinTime="12:00:00"
        // @ts-ignore
        events={events}
        eventClick={(info) => handleOpen(info)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {targetEvent?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {targetEvent?.startTime.substring(0, 5)} ~ {targetEvent?.endTime.substring(0, 5)}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default Calender

