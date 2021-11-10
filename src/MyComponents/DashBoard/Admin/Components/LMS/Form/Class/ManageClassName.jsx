import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';

const ManageClassName = ({ show, setShow }) => {
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg">
        <div className="w-full flex justify-end p-4">
          <IconButton onClick={() => setShow(false)}>
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <form className="flex flex-wrap justify-center items-center text-lg font-bold">
          <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
            <div className="w-full lg:w-5/12">
              <input
                type="text"
                placeholder="Course name"
                className="bg-client p-5 w-full"
              />
            </div>

            <div className="w-full lg:w-5/12">
              <input
                type="Number"
                placeholder="Course price"
                className="bg-client p-5 w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          >
            EDIT COURSE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageClassName;
