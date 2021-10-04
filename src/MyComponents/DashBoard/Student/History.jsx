import React from 'react'

const History = () => {
    return (
        <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 p-2 md:p-4">
            <h1 className="text-3xl md:text-4xl text-center text-gray-3 font-bold mb-6">History</h1>
            <div
                className="flex flex-col md:flex-row border-2 text-lg items-center"
              >
                <div className="flex flex-col items-center text-center w-full md:w-2/12">
                  <h1 className="px-3 text-red-1 font-bold">Date</h1>
                  <h1 className="px-3  leading-tight">Time</h1>
                </div>
                <h1 className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at natus aut delectus, eveniet culpa illo necessitatibus accusamus animi, vel eum! Atque cumque quas ab quia ipsa earum asperiores suscipit!
                </h1>
                <div className="flex flex-col items-center mx-auto">
                  <div className="flex flex-col items-center mx-auto">
                    <button
                      className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default History;