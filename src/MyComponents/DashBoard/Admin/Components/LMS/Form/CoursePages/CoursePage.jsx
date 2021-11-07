import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import ProfileBar from '../../../ProfileBar';
import SideNav from '../../../SideNav';

export const CoursePage = () => {
  const { courseId } = useParams();
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [module, setModule] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axiosInstance
      .get(`/material/getCourse/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModule(res.data.data);
      })
      .catch();
  }, [token, courseId]);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <div className="bg-white p-4 py-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <div className="p-2 mb-4">
            <h1 className="text-xl">
              <span className="text-gray-2 font-bold mr-3">Course Name:</span>
              {module?.Course?.name}
            </h1>
            <h1 className="text-xl">
              <span className="text-gray-2 font-bold mr-3">
                Course Description:
              </span>
              {module?.Course?.description}
            </h1>
            <h1 className="text-xl">
              <span className="text-gray-2 font-bold mr-3">
                Course Duration:
              </span>
              {module?.Course?.duration}
            </h1>
          </div>
          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Module
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Duration
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Module Description
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Created
            </h1>
          </div>
          {module?.Module?.map((c) => {
            return (
              <>
                <div
                  onClick={() => {
                    history.push(
                      `/dashboard/admin/lms/course/${courseId}/module/${c._id}`,
                    );
                  }}
                  className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1"
                >
                  <h1 className="lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
                    {c?.name}
                  </h1>
                  <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    <h1 className="font-bold">{c?.duration} min</h1>
                  </div>
                  <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                    <h1 className="">{c?.description}</h1>
                  </div>
                  <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                    <h1>{new Date(c?.createdAt).toLocaleString('en-Us')}</h1>
                  </div>
                </div>
              </>
            );
          })}
          <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
