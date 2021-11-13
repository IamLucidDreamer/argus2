import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../helpers/axiosInstance';

const History = () => {
  const [activity, setactivity] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setpageData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/user-activity/get?page=1&limit=100000`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        setactivity(
          res.data.data.activities.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          ),
        ),
      );
  }, []);

  useEffect(() => {
    setpageData(activity.slice((page - 1) * 10, page * 10));
  }, [page, activity]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        HISTORY
      </h1>
      <Pagination
        className="p-1 mb-4"
        count={Math.ceil(activity.length / 10)}
        shape="rounded"
        onChange={(event, value) => {
          setPage(value);
        }}
      />

      <div className="hidden lg:flex flex-col md:flex-row text-lg items-stretch mb-2">
        <h1 className="text-center w-full md:w-3/12 lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Date
        </h1>
        <h1 className="text-center w-full md:w-6/12 lg:w-7/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Description
        </h1>
        <h1 className="text-center w-full md:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Action By
        </h1>
      </div>
      {pageData?.map((a) => {
        return (
          <>
            <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
              <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                <h1 className="">
                  {new Date(a.createdAt).toLocaleDateString('en-GB')}
                </h1>
                <h1 className="font-bold">
                  {new Date(a.createdAt).toLocaleTimeString(`en-US`, {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </h1>
              </div>
              <h1 className="lg:w-7/12 flex items-center px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
                {a.activityDetails}
              </h1>
              <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                <h1>{a.userName}</h1>
              </div>
            </div>
            <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
          </>
        );
      })}
    </div>
  );
};

export default History;
