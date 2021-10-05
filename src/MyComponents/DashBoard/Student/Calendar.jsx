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
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        CALENDER
      </h1>
      <StudentCalendar
        localizer={localizer}
        events={[
          {
            id: 0,
            title: 'CPR/Medical Training',
            start: new Date(new Date().setHours(new Date().getHours() - 7)),
            end: new Date(new Date().setHours(new Date().getHours() - 4)),
          },
        ]}
        resizable
        defaultView="month"
        className="student-calender mx-1 sm:mx-2 sm:mb-0 lg:mx-10 p-1 sm:p-4 rounded-2xl"
      />
    </div>
  );
};

export default Calendar;
