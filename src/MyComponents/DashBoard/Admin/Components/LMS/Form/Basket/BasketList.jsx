import React, { useState } from 'react';
import BasketStudents from './BasketStudents';
import download from '../../../../../../../argus website/SVG/download-solid.svg';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../../../../../../context/actions/lmsActions/basketActions';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';

const BasketList = ({ b, setShowAlert }) => {
  const [showStudents, setShowStudents] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.users.students);
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [exportData, setExportData] = useState([]);
  const getData = () => {
    axiosInstance
      .get(`/bucket/get/${b._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setExportData(
          students.filter(({ _id: id1 }) =>
            res.data.data.students.some(({ studentId: id2 }) => id2 === id1),
          ),
        );
      });
    return exportData;
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <CSVLink filename={`${b?._id}.csv`} data={getData()}>
            <img
              onClick={() => {
                const token = JSON.parse(localStorage.getItem('jwt'));
                axiosInstance
                  .put(
                    `/bucket/update-status/${b?._id}`,
                    { status: 'DOWNLOADED' },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    },
                  )
                  .then((res) => {
                    dispatch(updateStatus(b?._id));
                  })
                  .catch((err) => {
                    setShowAlert({
                      show: true,
                      message: 'Update status failed download again',
                      success: false,
                    });
                  });
              }}
              src={download}
              alt=""
              className="w-8 h-8 opacity-60 hover:opacity-80 cursor-pointer"
            />
          </CSVLink>
        </div>

        <div
          onClick={() => setShowStudents(!showStudents)}
          className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg"
        >
          <h1 className="font-bold">{b?._id}</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{new Date(b?.createdAt).toDateString()}</h1>
          <h1 className="font-bold">
            {new Date(b?.createdAt).toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{b?.noOfStudents}</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{b?.status}</h1>
        </div>
      </div>
      <div
        className={`${
          showStudents ? 'block' : 'hidden'
        } border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3`}
      >
        <BasketStudents b={b} />
      </div>
    </>
  );
};

export default BasketList;
