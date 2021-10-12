import React from "react";

const ClassOverview = () => {
  return (
    <div>
      <h1 className="text-2xl text-center my-4 leading-tight title-font font-bold text-white w-48 sm:w-72 mx-auto bg-red-1 rounded-xl pt-2 pb-3">
        Class Overview
      </h1>
      <h1 className="font-bold text-center text-lg my-3">Dates Here</h1>
      
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-7/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Document
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Status
        </h1>
      </div>
    </div>
  );
};

export default ClassOverview;
