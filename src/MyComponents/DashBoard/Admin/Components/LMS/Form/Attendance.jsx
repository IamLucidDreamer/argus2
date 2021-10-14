import React from 'react'

const Attendance = () => {
    return (
        <div>
            <form className="flex flex-wrap justify-center items-center text-lg font-bold">
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <input type="text" placeholder="Dropdown of Classes" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
            <button className="mt-2 mb-7 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">SEARCH</button>
        </form>
            <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
                <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Student ID
                </h1>
                <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Student Name
                </h1>
                <h1 className="text-center lg:w-4/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Notes
                </h1>
                <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                Status
                </h1>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">123456789010</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-4/12 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <input className="text-left px-3 py-3 rounded-xl outline-none ring-0 focus:ring-red-1 focus:ring-2" placeholder="Type Here"></input>
        </div>
        <div className="flex flex-row justify-evenly text-center lg:w-2/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 text-xl lg:text-sm xl:text-xl font-bold">
          <h1 className="w-5/12 bg-red-1 my-auto rounded-xl py-4 text-white hover:text-red-1 hover:bg-white border-2 border-red-1">A</h1>
          <h1 className="w-5/12 bg-green-1 my-auto rounded-xl py-4 text-white hover:text-green-1 hover:bg-white border-2 border-green-1">P</h1>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">123456789010</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Testing test testing</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-4/12 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
        <input className="text-left px-3 py-3 rounded-xl outline-none ring-0 focus:ring-red-1 focus:ring-2" placeholder="Type Here"></input>
        </div>
        <div className="flex flex-row justify-evenly text-center lg:w-2/12 text-gray-2 rounded-xl mx-1 my-1 lg:my-0 text-xl lg:text-sm xl:text-xl font-bold">
          <h1 className="w-5/12 bg-red-1 my-auto rounded-xl py-4 text-white hover:text-red-1 hover:bg-white border-2 border-red-1">A</h1>
          <h1 className="w-5/12 bg-green-1 my-auto rounded-xl py-4 text-white hover:text-green-1 hover:bg-white border-2 border-green-1">P</h1>
        </div>
      </div>
    </div>
    )
}
export default Attendance;