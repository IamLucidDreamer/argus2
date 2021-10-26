import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getUser,
  updateUser,
} from '../../../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../../../helpers/axiosInstance';

const BackgroundDetails = () => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.hasCriminalRecord) {
      errors.hasCriminalRecord = '*Required';
    }
    if (!values.hasVechicle) {
      errors.hasVechicle = '*Required';
    }
    if (!values.hasLicenseToDrive) {
      errors.hasLicenseToDrive = '*Required';
    }
    if (!values.levelOfEducation) {
      errors.levelOfEducation = '*Required';
    }
    if (!values.languagesKnown[0]) {
      errors.languagesKnown = '*Required';
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      hasCriminalRecord: '',
      hasVechicle: '',
      hasLicenseToDrive: '',
      levelOfEducation: '',
      languagesKnown: [''],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      dispatch(updateUser(resetForm, values, 'BackGround Details updated'));
    },
  });

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
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
          <h1 className="text-lg text-gray-3 font-bold mx-5">
            Background Declaration
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black font-bold"
        >
          <div className="flex flex-col">
            <label> Do you have a criminal record ?</label>
            <select
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('hasCriminalRecord')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasCriminalRecord ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasCriminalRecord}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Do you own a vehicle ?</label>
            <select
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('hasVechicle')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasVechicle ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasVechicle}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Are you fully licensed to drive ?</label>
            <select
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('hasLicenseToDrive')}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasLicenseToDrive ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasLicenseToDrive}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> What is your highest level of Education?</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('levelOfEducation')}
            />
            {errors.levelOfEducation ? (
              <div className="w-full text-xs text-red-400">
                {errors.levelOfEducation}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Spoken Languages</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('languagesKnown[0]')}
            />
            {errors.languagesKnown ? (
              <div className="w-full text-xs text-red-400">
                {errors.languagesKnown}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default BackgroundDetails;
