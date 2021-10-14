import React from "react";

const AddInstructors = () => {
  return (
    <div>
      <div>
        <div class="bg-white flex items-center rounded-full shadow-lg w-full lg:w-1/2 mx-auto border-3 border-gray-2 my-10">
          <input
            class="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />
          <div class="m-2 p-2 border-l-2 border-gray-2">
            <button class="focus:outline-none flex items-center justify-center">
              <span className="inline-block text-gray-2">
                <svg
                  className="w-8 h-8"
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
            </button>
          </div>
        </div>
        <form className="flex flex-wrap justify-center items-center text-lg font-bold">
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
            <input
              type="number"
              placeholder="Instructor ID"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full">
            <button className="my-4 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
              DELETE INSTRUCTOR
            </button>
            <button className="my-4 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg">
              ADD INSTRUCTOR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInstructors;
