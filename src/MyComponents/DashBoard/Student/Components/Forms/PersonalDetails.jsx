import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getUser,
  updateUser,
} from '../../../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../../../helpers/axiosInstance';

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.dateOfBirth) {
      errors.dateOfBirth = '*Required';
    }
    if (!values.gender) {
      errors.gender = '*Required';
    }
    if (!values.weight) {
      errors.weight = '*Required';
    }
    if (!values.height) {
      errors.height = '*Required';
    }
    if (!values.eyeColor) {
      errors.eyeColor = '*Required';
    }
    if (!values.hairColor) {
      errors.hairColor = '*Required';
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      dateOfBirth: '',
      gender: '',
      weight: '',
      height: '',
      eyeColor: '',
      hairColor: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      dispatch(updateUser(resetForm, values, 'Personal Details updated'));
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
          <h1 className="leading-tight text-3xl font-bold text-gray-3 mx-5">
            Personal Details
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-gray-2 font-bold placeholder-red-1"
        >
          <div className="flex flex-col">
            <label> Date of Birth</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              type="date"
              {...getFieldProps('dateOfBirth')}
            />
            {errors.dateOfBirth ? (
              <div className="w-full text-xs text-red-400">
                {errors.dateOfBirth}
              </div>
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex flex-col w-5/12">
              <label> Height</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                placeholder="180 cm"
                type="number"
                min="0"
                max="280"
                {...getFieldProps('height')}
              />
              {errors.height ? (
                <div className="w-full text-xs text-red-400">
                  {errors.height}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col w-5/12">
              <label> Weight</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                placeholder="160 lbs"
                type="number"
                min="0"
                max="500"
                {...getFieldProps('weight')}
              />
              {errors.weight ? (
                <div className="w-full text-xs text-red-400">
                  {errors.weight}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label> Eye Color</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('eyeColor')}
            />
            {errors.eyeColor ? (
              <div className="w-full text-xs text-red-400">
                {errors.eyeColor}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Hair Color</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('hairColor')}
            />
            {errors.hairColor ? (
              <div className="w-full text-xs text-red-400">
                {errors.hairColor}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Gender</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps('gender')}
            >
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Trans</option>
              <option value="others">Others</option>
            </select>
            {errors.gender ? (
              <div className="w-full text-xs text-red-400">{errors.gender}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
