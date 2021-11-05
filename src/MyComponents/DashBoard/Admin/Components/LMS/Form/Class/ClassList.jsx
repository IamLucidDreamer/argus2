import React, { useState } from 'react';
import ClassStudents from './ClassStudents';

const ClassList = ({ c }) => {
  const [showStudents, setShowStudents] = useState(false);

  return (
    <div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center items-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">{c?._id}</h1>
          <h1 className="text-left">{c?.classname}</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{c?.date}</h1>
          <h1 className="font-bold">{c?.time}</h1>
        </div>
        <div
          onClick={() => {
            setShowStudents(!showStudents);
          }}
          className={`${
            showStudents ? 'bg-red-1 text-white' : 'bg-white text-gray-2'
          } flex flex-col cursor-pointer justify-center text-center lg:w-2/12 px-3 py-3  rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg hover:bg-red-1 hover:text-white font-bold`}
        >
          <h1 className="">Show enrolled students</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">{c?.location}</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>{c?.instructorName}</h1>
        </div>
      </div>
      <div
        className={`${
          showStudents ? 'block' : 'hidden'
        } border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3`}
      >
        <ClassStudents c={c} />
      </div>
    </div>
  );
};

export default ClassList;
