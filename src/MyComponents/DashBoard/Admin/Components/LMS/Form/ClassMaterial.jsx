import React, { useState } from 'react';
import AddChapter from './AddChapter';
import AddCourse from './AddCourse';
import AddModule from './AddModule';

export const ClassMaterial = () => {
  const [button, setButton] = useState({
    course: false,
    module: false,
    chapter: false,
  });

  return (
    <div>
      <div className="w-full flex justify-evenly">
        <button
          onClick={() =>
            setButton({ course: !button.course, module: false, chapter: false })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD COURSE
        </button>
        <button
          onClick={() =>
            setButton({ course: false, module: !button.module, chapter: false })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD MODULE
        </button>
        <button
          onClick={() =>
            setButton({
              course: false,
              module: false,
              chapter: !button.chapter,
            })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD CHAPTER
        </button>
      </div>
      <AddCourse button={button.course} setButton={setButton} />
      <AddModule button={button.module} setButton={setButton} />
      <AddChapter button={button.chapter} setButton={setButton} />
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Course
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Duration
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Course Description
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Created
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
        <h1 className="lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          at natus aut delectus.
        </h1>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
          <h1 className="font-bold">23:00</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Percentage Bar</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>Thisasd dasasdfa</h1>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
        <h1 className="lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          at natus aut delectus.
        </h1>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
          <h1 className="font-bold">23:00</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Percentage Bar</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>Thisasd dasasdfa</h1>
        </div>
      </div>
    </div>
  );
};

export default ClassMaterial;
