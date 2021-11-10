import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router';
import axiosInstance from '../../../helpers/axiosInstance';

const Course = () => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('/material/getUsersCourses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setCourses(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        Courses
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {courses.length === 0 ? (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              No courses to show
            </p>
          ) : (
            <>
              <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-6/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Course
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Started
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Progress
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Status
                </h1>
              </div>
              {courses.map((c) => {
                let startedAt = new Date(
                  parseInt(c?._id.toString().substring(0, 8), 16) * 1000,
                ).toLocaleString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                });
                return (
                  <>
                    <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
                      <div
                        onClick={() =>
                          history.push(
                            `/dashboard/student/course/${c?._id}/module`,
                          )
                        }
                        className="lg:w-6/12 px-3 py-3 text-gray-2 rounded-xl border-2 text-xl  mx-1 my-1 lg:my-0 hover:bg-red-1 font-bold hover:text-white cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span>{c?.name}</span>
                          <span className="font-semibold text-lg">
                            {c?.description}
                          </span>
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
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Course;
