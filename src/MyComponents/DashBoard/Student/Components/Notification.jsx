import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../helpers/axiosInstance';

function Notification({ notification }) {
  const [activity, setactivity] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/user-activity/get?page=1&limit=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setactivity(res.data.data.activities));
  }, []);
  return (
    <div
      className={`w-full h-96 mb-2 font-medium text-gray-3 bg-bg-card overflow-y-scroll rounded ${
        notification
          ? 'transition-all duration-300 opacity-100 block'
          : 'transition-all duration-300 opacity-0 hidden'
      }`}
    >
      {activity.map((a) => {
        return (
          <div className="border-b-3 border-white text-sm p-3 leading-snug rounded-lg text-gray-2">
            {a.activityDetails}
            <div className="text-xs font-bold text-right mt-1">
              {new Date(a.createdAt).toLocaleDateString('en-GB')}
              <span className="">
                {new Date(a.createdAt).toLocaleTimeString(`en-US`)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notification;
