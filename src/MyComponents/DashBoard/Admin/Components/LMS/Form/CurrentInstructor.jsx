import React from 'react'
import Profile from './../../../../../../argus website/PNG/IMG_0118.png'

const CurrentInstructor = () => {
    return (
        <div>
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
          <h1 className="w-full bg-red-1 my-auto rounded-xl py-4 text-white hover:text-red-1 hover:bg-white border-2 border-red-1">DELETE</h1>
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
          <h1 className="w-full bg-red-1 my-auto rounded-xl py-4 text-white hover:text-red-1 hover:bg-white border-2 border-red-1">DELETE</h1>
        </div>
      </div>
    </div>
    )
}

export default CurrentInstructor;