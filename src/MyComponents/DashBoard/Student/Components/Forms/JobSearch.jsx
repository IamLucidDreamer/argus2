import { useFormik } from 'formik';
import React from 'react';
import axiosInstance from '../../../../../helpers/axiosInstance';

const JobSearch = () => {
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
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .put('/user/update', values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => resetForm())
        .catch((err) => {});
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
          <h1 className="text-lg text-gray-3 font-bold mx-5">Job Search</h1>
        </div>

        <form className="flex flex-col text-black font-bold">
          <label> Are you looking for a job?</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Email me about new opportunities?</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Preferred City of Employment</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Availability</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Wage Range</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />

          <button className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobSearch;
