import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import ProfileBar from '../../../ProfileBar';
import SideNav from '../../../SideNav';

export const ChapterPage = () => {
  const { courseId, chapterId } = useParams();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem('jwt'));
  const [chapter, setChapter] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/material/getChapter/${courseId}/${chapterId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setChapter(res.data.data);
      })
      .catch();
  }, [token, courseId, chapterId]);

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
              <span className="text-gray-2 font-bold mr-3">Chapter Name:</span>
              {chapter?.name}
            </h1>
            <h1 className="text-xl">
              <span className="text-gray-2 font-bold mr-3">
                Chapter Description:
              </span>
              {chapter?.description}
            </h1>
            <h1 className="text-xl">
              <span className="text-gray-2 font-bold mr-3">
                Chapter Duration:
              </span>
              {chapter?.duration}
            </h1>
          </div>
          {chapter?.slides?.map((c) => {
            return (
              <>
                <div className="text-gray-2 rounded-xl border-2 flex p-4 mb-2">
                  {c.text ? (
                    <>
                      <img
                        className="w-40"
                        src={`http://localhost:8000/api/material/getSlideImg/${courseId}/${chapterId}/${c._id}`}
                        alt=""
                      />
                      <div className="ml-4">
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            {c?.title}
                          </span>
                        </h1>
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            {c?.text}
                          </span>
                        </h1>
                      </div>
                    </>
                  ) : null}
                  {c.question ? (
                    <>
                      <div className="">
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            Question- {c?.question}
                          </span>
                        </h1>
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            {'A)'}
                          </span>
                          {c?.optionA}
                        </h1>
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            {'B)'}
                          </span>
                          {c?.optionB}
                        </h1>
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            {'C)'}
                          </span>
                          {c?.optionC}
                        </h1>
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            {'D)'}
                          </span>
                          {c?.optionD}
                        </h1>
                        <h1 className="text-xl">
                          <span className="text-gray-2 font-bold mr-3">
                            Correct Option-
                          </span>
                          {c?.correctOpt}
                        </h1>
                      </div>
                    </>
                  ) : null}
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

export default ChapterPage;
