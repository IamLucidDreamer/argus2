import React from "react";

const LicensedEmployee = () => {
  return (
    <div>
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Student ID
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Student Name
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Document
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Date
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">123456789010</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Document Name Here</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
          <h1 className="font-bold">23:00</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">123456789010</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Document Name Here</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
          <h1 className="font-bold">23:00</h1>
        </div>
      </div>
    </div>
  );
};

export default LicensedEmployee;
