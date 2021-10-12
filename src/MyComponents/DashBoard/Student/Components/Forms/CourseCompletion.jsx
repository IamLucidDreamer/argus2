import React from "react";

const CourseCompletion = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">My Progress</h1>
        </div>

        <div className="flex flex-col text-black font-bold">
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-5/12 h-full bg-red-1 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-red-1">40%</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-9/12 h-full bg-green-600 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-greem-600">80%</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-5/12 h-full bg-red-1 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-red-1">40%</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-5/12 h-full bg-yellow-500 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-yellow-500">60%</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-5/12 h-full bg-red-1 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-red-1">40%</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-5/12 h-full bg-red-1 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-red-1">40%</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border-b-2 border-black py-4">
            <h1>Unit 1 - </h1>
            <p className="text-gray-2 w-full sm:w-5/12 pl-1">Name of the Chapter</p>
            <div className="flex items-center w-full sm:w-5/12">
              <div className="bg-client w-full rounded-2xl h-2">
                <div className="w-5/12 h-full bg-red-1 rounded-2xl"></div>
              </div>
              <h1 className="text-sm pl-2 text-red-1">40%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletion;
