import React from 'react';

const Experience = ({
  setFormNo,
  formNo,
  formData,
  setFormData,
  submitForm,
}) => {
  return (
    <div className="pb-10">
      <div className="w-full flex flex-col px-10 ">
        <label className="text-lg text-gray-400">
          Do you have any prior Security experience in Canada?
        </label>
        <div className="flex">
          <div
            onClick={() => setFormData({ ...formData, priorExperience: true })}
            className={`${
              formData.priorExperience
                ? 'bg-red-1 text-white'
                : 'bg-white text-gray-400'
            }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 mr-2 mt-2 w-full`}
          >
            YES
          </div>
          <div
            onClick={() => setFormData({ ...formData, priorExperience: false })}
            className={`${
              formData.priorExperience === false
                ? 'bg-red-1 text-white'
                : 'bg-white text-gray-400'
            }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-5 ml-2 mt-2 w-full`}
          >
            NO
          </div>
        </div>
        {formData.priorExperience === null ? (
          <div className="w-full text-xs text-red-400">*Required</div>
        ) : null}
      </div>

      <div className="w-full flex px-10 mt-6">
        <div className="w-full mr-2">
          <label className="text-lg text-gray-400">
            Number of years of experience?
          </label>
          <input
            type="number"
            placeholder="Years of experience"
            className="p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2"
            value={formData.yearsOfExp}
            onChange={(e) =>
              setFormData({ ...formData, yearsOfExp: e.target.value })
            }
          />
          {!formData.yearsOfExp ? (
            <div className="w-full text-xs text-red-400">*Required</div>
          ) : null}
        </div>
      </div>
      <div className="w-full px-10 flex mt-6 ">
        <button
          onClick={() => setFormNo(2)}
          className="flex-1 mr-2 font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner"
        >
          BACK
        </button>
        <button
          onClick={(e) => submitForm(e)}
          className="flex-1 ml-2 font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner"
        >
          FINISH
        </button>
      </div>
    </div>
  );
};

export default Experience;