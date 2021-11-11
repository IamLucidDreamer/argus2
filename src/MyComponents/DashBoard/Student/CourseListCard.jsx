import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axiosInstance from '../../../helpers/axiosInstance';

const CourseListCard = ({ c, startedAt, index }) => {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem('jwt'));

  const progress = useSelector((state) => state.progress.progress);

  // useEffect(() => {

  //   progress.forEach(element => {

  //   });

  //   axiosInstance
  //   .get('/material/getDuration', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //   });

  // }, [token])

  return (
    <>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
        <div
          onClick={() => {
            history.push(`/dashboard/student/course/${c?._id}/module`);
          }}
          className="lg:w-6/12 px-3 py-3 text-gray-2 rounded-xl border-2 text-xl  mx-1 my-1 lg:my-0 hover:bg-red-1 font-bold hover:text-white cursor-pointer"
        >
          <div className="flex flex-col">
            <span>{c?.name}</span>
            <span className="font-semibold text-lg">{c?.description}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">{startedAt}</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <div className="flex items-center w-full">
            <div className="bg-client w-full rounded-2xl h-2">
              <div className="w-9/12 h-full bg-green-1 rounded-2xl"></div>
            </div>
            <h1 className="text-sm pl-2 text-greem-1">80%</h1>
          </div>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>Incomplete / Complete</h1>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
    </>
  );
};

export default CourseListCard;
