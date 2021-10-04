import React from 'react';
import {
  Calendar as StudentCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

const Calendar = () => {
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <StudentCalendar
        localizer={localizer}
        events={[
          {
            id: 0,
            title: 'Today Event 1',
            start: new Date(new Date().setHours(new Date().getHours() - 7)),
            end: new Date(new Date().setHours(new Date().getHours() - 4)),
          },
          {
            id: 1,
            title: 'Today Event 2',
            start: new Date(new Date().setHours(new Date().getHours() - 3)),
            end: new Date(new Date().setHours(new Date().getHours() + 3)),
            desc: 'hiihihih',
          },
        ]}
        resizable
        defaultView="month"
        style={{ height: '85vh', backgroundColor: 'white' }}
        className="mx-2 sm:mb-0 lg:mx-10 px-2 md:px-6 py-6 rounded-2xl shadow-button-shadow-3"
      />
    </div>
  );
};

export default Calendar;
