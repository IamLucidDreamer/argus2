import React from 'react';

const AddCourse = ({ button, setButton }) => {
  return (
    <div className={`${button ? 'block' : 'hidden'}`}>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
          <input
            type="text"
            placeholder="Enter Course Name"
            className="bg-client p-5 w-full lg:w-5/12"
          />
          <input
            type="Number"
            placeholder="Duration of the Course"
            className="bg-client p-5 w-full lg:w-5/12"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
          <input
            type="number"
            placeholder="Price"
            className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0"
          />
          <input
            type="number"
            placeholder="Price"
            className="bg-client invisible p-5 w-full lg:w-5/12 mt-8 lg:mt-0"
          />
        </div>
        <textarea
          type="textarea"
          placeholder="Course description"
          className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:mt-4 h-60"
        />
        <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
          ADD COURSE
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
