import React from 'react';
import {
  Calendar as StudentCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment, { months } from 'moment';
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
        ]}
        resizable
        defaultView="month"
        className="student-calender mx-1 sm:mx-2 sm:mb-0 lg:mx-10 p-1 sm:p-4 rounded-2xl shadow-button-shadow-3"
      />
    </div>
  );
};

export default Calendar;
