import React from "react";

const EnrollStudent = () => {
  return (
    <div>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <input type="text" placeholder="Class ID Dropdown" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
        </form>
      <div className="flex flex-col-reverse md:flex-row justify-between m-2">
        <div className="flex flex-row items-center text-gray-2 font-bold mx-auto md:mx-0">
          <div className="w-10 h-10 rounded-xl bg-red-1 mr-1"></div>
          <h1 className="mx-1 hover:underline">2</h1>
          <h1 className="mx-1 hover:underline">3</h1>
          <h1 className="mx-1 hover:underline">4</h1>
          <h1 className="mx-1 hover:underline">5</h1>
          <h1 className="mx-1 hover:underline">10</h1>
          <h1 className="mx-1 hover:underline">100</h1>
          <div className="w-10 h-10 rounded-xl bg-red-1 ml-1"></div>
        </div>
        <button className="px-4 py-2 bg-red-1 text-white font-bold rounded-2xl hover:text-red-1 hover:bg-white border-2 border-red-1 mb-4 md:mb-0">Filter</button>
      </div>
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Select
        </h1>
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Student ID
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Student Name
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Phone Number
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          DOB
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
      <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <input type="checkbox" className="h-8 w-8 bg-red-1 text-red-1"/>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">123456789010</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">352345234</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <input type="checkbox" className="h-8 w-8 bg-red-1 text-red-1"/>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">123456789010</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">352345234</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
        </div>
      </div>
      <div className="flex">
        <button className="mx-auto my-6 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">ENROLL</button>
      </div>
    </div>
  );
};

export default EnrollStudent;
