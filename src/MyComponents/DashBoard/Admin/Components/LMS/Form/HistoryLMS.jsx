import React from 'react'

const HistoryLMS = () => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <button className="ml-auto px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1">Filter</button>
            </div>
            <div
                className="hidden lg:flex flex-col md:flex-row text-lg items-stretch mb-2"
              >
                <h1 className="text-center w-full md:w-3/12 lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">Date</h1>
                <h1 className="text-center w-full md:w-6/12 lg:w-7/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Description
                </h1>
                <h1 className="text-center w-full md:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">Action By</h1>
              </div>
              <div
                className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1"
              >
                <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                  <h1 className="">(yy/mm/dd)</h1>
                  <h1 className="font-bold">23:00</h1>
                </div>
                <h1 className="lg:w-7/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at natus aut delectus, eveniet culpa illo necessitatibus accusamus animi, vel eum! Atque cumque quas ab quia ipsa earum asperiores suscipit!
                </h1>
                <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                  <h1>Thisasd dasasdfa</h1>
                </div>
              </div>
              <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
              <div
                className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1"
              >
                <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                  <h1 className="">(yy/mm/dd)</h1>
                  <h1 className="font-bold">23:00</h1>
                </div>
                <h1 className="lg:w-7/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at natus aut delectus, eveniet culpa illo necessitatibus accusamus animi, vel eum! Atque cumque quas ab quia ipsa earum asperiores suscipit!
                </h1>
                <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                  <h1>Thisasd dasasdfa</h1>
                </div>
              </div>
        </div>
    )
}

export default HistoryLMS;