import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../../context/actions/authActions/getUserAction';

const JobHistory = ({ user, setShow }) => {
  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-box overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
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
          <h1 className="text-lg text-gray-3 font-bold mx-5">Job History</h1>
        </div>
        {user?.employmentRecord?.length === 0 ? (
          <p className="w-full text-center text-xl font-bold text-gray-400">
            Add employment record
          </p>
        ) : (
          <>
            {user?.employmentRecord?.map((m, index) => {
              return (
                <form className="flex flex-col text-black font-bold mb-4">
                  <label className="text-red-1">#{index + 1}</label>
                  <div className="flex flex-col">
                    <label> Category</label>
                    <input
                      disabled
                      className="border-b-2 border-black focus:border-red-1 focus:outline-none"
                      value={m?.category}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label> Company Name</label>
                    <input
                      disabled
                      className="border-b-2 border-black focus:border-red-1 focus:outline-none"
                      value={m?.companyName}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label> Address</label>
                    <input
                      disabled
                      className="border-b-2 border-black focus:border-red-1 focus:outline-none"
                      value={m?.companyAddress}
                    />
                  </div>
                  <div className="flex flex-col mt-4 ">
                    <label> Employment Duration</label>
                    <div className="w-full flex">
                      <input
                        disabled
                        className="mr-2 w-full border-b-2 border-black focus:border-red-1 focus:outline-none"
                        placeholder="from"
                        type="date"
                        value={m?.employeeDurationFrom}
                      />
                      <label> To</label>
                      <input
                        disabled
                        className="ml-2 w-full border-b-2 border-black focus:border-red-1 focus:outline-none"
                        placeholder="to"
                        type="date"
                        value={m?.employeeDurationTo}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <label> Reason for Leaving</label>
                    <input
                      disabled
                      className="border-b-2 border-black focus:border-red-1 focus:outline-none"
                      value={m?.reasonForLeaving}
                    />
                  </div>
                </form>
              );
            })}
          </>
        )}
        <div className="w-full flex justify-center">
          <button
            onClick={() => setShow(true)}
            className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1"
          >
            {user?.employmentRecord?.length === 0 ? 'Add' : 'Add More +'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
