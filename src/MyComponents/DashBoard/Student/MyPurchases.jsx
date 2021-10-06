import React from 'react'

const MyPurchases = () => {
    return (
        <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
            <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">MY PURCHASES</h1>
            <div
                className="hidden md:flex flex-col md:flex-row text-lg items-stretch mb-2"
              >
                <h1 className="text-center w-full md:w-6/12 lg:w-7/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
                  Description
                </h1>
                <h1 className="text-center w-full md:w-3/12 lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">Graduation</h1>
                <h1 className="text-center w-full md:w-3/12 lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">Expiry</h1>
                <h1 className="text-center w-full md:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">Status</h1>
              </div>
              <div
                className="flex flex-col md:flex-row text-lg items-md:stretch mb-2 rounded-xl"
              >
                <div className="flex flex-col justify-center text-center md:w-3/12 lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 md:my-0">
                  <h1 className="text-lg md:text-base lg:text-lg">(yy/mm/dd)</h1>
                  <h1 className="font-bold">23:00</h1>
                </div>
                <h1 className="md:w-6/12 lg:w-7/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 md:my-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at natus aut delectus, eveniet culpa illo necessitatibus accusamus animi, vel eum! Atque cumque quas ab quia ipsa earum asperiores suscipit!
                </h1>
                <div className="flex flex-col justify-center text-center md:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 md:my-0">
                  <h1>Thisasd dasasdfa</h1>
                </div>
              </div>
              <div className="block md:hidden bg-red-1 w-full h-0.5 my-8"></div>
              <div
                className="flex flex-col md:flex-row text-lg items-stretch mb-2 rounded-xl"
              >
                <div className="flex flex-col justify-center text-center md:w-3/12 lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 md:my-0">
                  <h1 className="text-lg md:text-base lg:text-lg">(yy/mm/dd)</h1>
                  <h1 className="font-bold">23:00</h1>
                </div>
                <h1 className="md:w-6/12 lg:w-7/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 md:my-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at natus aut delectus, eveniet culpa illo necessitatibus accusamus animi, vel eum! Atque cumque quas ab quia ipsa earum asperiores suscipit!
                </h1>
                <div className="flex flex-col justify-center text-center md:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 md:my-0">
                  <h1>Action Byasdf</h1>
                </div>
              </div>
        </div>
    )
}

export default MyPurchases;