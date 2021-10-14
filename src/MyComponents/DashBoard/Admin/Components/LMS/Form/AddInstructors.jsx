import React from "react";
import Profile from './../../../../../../argus website/PNG/IMG_0118.png'

const AddInstructors = () => {
  return (
    <div>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <input type="date" placeholder="Name of the student" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
                <input type="text" placeholder="Student ID" className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <input type="text" placeholder="First Name" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
                <input type="text" placeholder="Last Name" className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <input type="email" placeholder="Email" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
                <input type="text" placeholder="Course DropDown" className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <input type="email" placeholder="Phone Number" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
                <input type="text" placeholder="City" className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
            <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">SEARCH</button>
        </form>
        <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Instructor ID
                </h1>
                <h1 className="text-center lg:w-4/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Instructor Name
                </h1>
                <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Phone No.
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Action
                </h1>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">123456789010</h1>
        </div>
        <div className="flex flex-row justify-start items-center text-center lg:w-4/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <img src={Profile} alt="" className="w-16 h-16 rounded-xl mr-5"/>
          <h1 className="font-bold">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 border-2  text-lg lg:text-sm xl:text-lg">
          <h1 className="">8234559823</h1>
        </div>
        <div className="flex flex-row justify-evenly text-center lg:w-2/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 text-xl lg:text-sm xl:text-xl font-bold">
          <h1 className="w-full bg-green-1 my-auto rounded-xl py-4 text-white hover:text-green-1 hover:bg-white border-2 border-green-1">ADD</h1>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">123456789010</h1>
        </div>
        <div className="flex flex-row justify-start items-center text-center lg:w-4/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <img src={Profile} alt="" className="w-16 h-16 rounded-xl mr-5"/>
          <h1 className="font-bold">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 border-2  text-lg lg:text-sm xl:text-lg">
          <h1 className="">8234559823</h1>
        </div>
        <div className="flex flex-row justify-evenly text-center lg:w-2/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 text-xl lg:text-sm xl:text-xl font-bold">
          <h1 className="w-full bg-green-1 my-auto rounded-xl py-4 text-white hover:text-green-1 hover:bg-white border-2 border-green-1">ADD</h1>
        </div>
      </div>
    </div>
  );
};

export default AddInstructors;
