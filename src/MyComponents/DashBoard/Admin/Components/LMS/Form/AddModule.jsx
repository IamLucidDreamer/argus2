import React from 'react';
import Select from 'react-select';

const AddModule = ({ button, setButton }) => {
  return (
    <div className={`${button ? 'block' : 'hidden'}`}>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
          <Select
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
          <input
            type="Number"
            placeholder="Module Name"
            className="bg-client p-5 w-full lg:w-5/12"
          />
        </div>
        <textarea
          type="textarea"
          placeholder="Message"
          className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:mt-4 h-60"
        />
        <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
          ADD MODULE
        </button>
      </form>
    </div>
  );
};

export default AddModule;
