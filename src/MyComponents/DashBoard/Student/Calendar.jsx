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
          },
        ]}
        resizable
        defaultView="month"
        style={{ height: '80vh' }}
        className="p-2 lg:p-10"
      />
    </div>
  );
};

export default Calendar;
