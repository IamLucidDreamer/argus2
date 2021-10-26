import React, { useEffect, useState } from 'react';
import {
  Calendar as StudentCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import axiosInstance from '../../../helpers/axiosInstance';
import { useSelector } from 'react-redux';

const Calendar = () => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const user = useSelector((state) => state.user.user);

  const [event, setEvent] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/calender-event/get/user/${user?._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEvent(res?.data?.data);
      });
  }, []);

  const localizer = momentLocalizer(moment);
  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 py-8">
      <StudentCalendar
        localizer={localizer}
        events={[
          {
            id: 0,
            title: 'CPR/Medical ',
            start: new Date(new Date().setHours(new Date().getHours() - 7)),
            end: new Date(new Date().setHours(new Date().getHours() - 4)),
          },
        ]}
        resizable
        defaultView="month"
        className="student-calender rounded-2xl"
      />
    </div>
  );
};

export default Calendar;
