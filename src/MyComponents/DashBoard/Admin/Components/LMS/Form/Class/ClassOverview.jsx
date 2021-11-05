import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import ClassList from './ClassList';
import Select from 'react-select';
import { addClass } from '../../../../../../../context/actions/lmsActions/classActions';
import { Pagination } from '@mui/material';
const ClassOverview = () => {
  const [newclass, setnewclass] = useState(false);
  const classList = useSelector((state) => state.class.class);
  const instructor = useSelector((state) => state.users.instructors);
  const [selectedIns, setSelectedIns] = useState(null);
  const [page, setPage] = useState(1);
  const [pageData, setpageData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setpageData(classList.slice((page - 1) * 5, page * 5));
  }, [page, classList]);

  let options = [];
  instructor.forEach((element) => {
    options.push({
      value: element._id,
      label: element.name + '(' + element._id + ')',
    });
  });

  const validate = (values) => {
    const errors = {};
    if (!values.classname) {
      errors.classname = '*Required';
    }
    if (!values.date) {
      errors.date = '*Required';
    }
    if (!values.time) {
      errors.time = '*Required';
    }
    if (!values.location) {
      errors.location = '*Required';
    }
    if (!values.noOfSpots) {
      errors.noOfSpots = '*Required';
    }
    return errors;
  };

  const { getFieldProps, handleSubmit, values, errors } = useFormik({
    initialValues: {
      classname: '',
      date: '',
      time: '',
      location: '',
      noOfSpots: 0,
      students: [],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem('jwt'));
      axiosInstance
        .post(`/class/create/${selectedIns.value}`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setSelectedIns(null);
          resetForm();
          dispatch(addClass(res.data.data));
        });
    },
  });

  return (
    <div>
      <h1 className="font-bold text-center text-lg my-3">Dates Here</h1>
      <Pagination
        className="p-1 mb-4"
        count={Math.ceil(classList.length / 5)}
        shape="rounded"
        onChange={(event, value) => {
          setPage(value);
        }}
      />
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Class
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Date
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Enrolled
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Location
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Instructor
        </h1>
      </div>
      {pageData.map((c) => {
        return (
          <>
            <ClassList c={c} />
          </>
        );
      })}

      <div className="flex">
        <button
          onClick={() => setnewclass(!newclass)}
          className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          NEW CLASS
        </button>
      </div>
      <div className={newclass ? 'block' : 'hidden'}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center items-center text-lg font-bold text-gray-3"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="text"
              placeholder="Class Name DropDown"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps('classname')}
            />
            <Select
              placeholder="Select Class"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              options={options}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'lightgray',
                  primary: '#BA0913',
                },
              })}
              value={selectedIns}
              onChange={(selectedOption) => {
                setSelectedIns(selectedOption);
              }}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="date"
              placeholder=""
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps('date')}
            />
            <input
              type="time"
              placeholder="First Name"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps('time')}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="text"
              placeholder="Location DropDown"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps('location')}
            />
            <input
              type="number"
              placeholder="Number of Spots"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps('noOfSpots')}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
            <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
              DELETE CLASS
            </button>
            <button
              type="submit"
              className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
            >
              ADD CLASS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassOverview;
