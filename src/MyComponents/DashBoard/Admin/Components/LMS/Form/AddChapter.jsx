import React, { useState } from 'react';
import Select from 'react-select';

const AddChapter = ({ button, setButton }) => {
  const [slides, setSlides] = useState([]);

  return (
    <div className={`${button ? 'block' : 'hidden'}`}>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
          <Select
            placeholder="Select Course"
            className="bg-client p-3 w-full lg:w-5/12"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#BA0913',
              },
            })}
          />
          <Select
            placeholder="Select Module"
            className="bg-client p-3 w-full lg:w-5/12"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#BA0913',
              },
            })}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
          <input
            type="text"
            placeholder="Chapter Name"
            className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0"
          />
          <input
            type="text"
            placeholder="Chapter Name"
            className="bg-client invisible p-5 w-full lg:w-5/12 mt-8 lg:mt-0"
          />
        </div>
        <textarea
          type="textarea"
          placeholder="Message"
          className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:mt-4 h-60"
        />
        <div className="w-full flex flex-col">
          <p
            onClick={() => setSlides([...slides, {}])}
            className="cursor-pointer hover:text-red-1 m-4 mt-6 text-2xl ml-12 "
          >
            Add Slides +
          </p>
          {slides.map((s, i) => (
            <div className="w-full flex flex-col lg:flex-row items-center justify-around px-4 my-4">
              <input
                type="file"
                placeholder="Chapter Name"
                className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0"
              />
              <input
                type="text"
                placeholder="Slide text"
                className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0"
              />
              <p
                className="cursor-pointer text-2xl"
                onClick={() =>
                  setSlides(slides.filter((f, index) => index !== i))
                }
              >
                X
              </p>
            </div>
          ))}
        </div>
        <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
          ADD CHAPTER
        </button>
      </form>
    </div>
  );
};

export default AddChapter;
