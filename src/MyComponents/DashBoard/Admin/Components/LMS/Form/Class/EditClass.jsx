import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import Select from "react-select";
import { get_Class } from "../../../../../../../context/actions/lmsActions/classActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const EditClass = ({ selectedClass, setEdit, setShowAlert }) => {
  const token = JSON.parse(localStorage.getItem("jwt"));

  const [selectedIns, setSelectedIns] = useState(null);
  const dispatch = useDispatch();
  const instructor = useSelector((state) => state.users.instructors);

  let options = [];
  instructor.forEach((element) => {
    options.push({
      value: element._id,
      label: element.name + "(" + element._id + ")",
    });
  });

  const validate = (values) => {
    const errors = {};
    if (!values.classname) {
      errors.classname = "*Required";
    }
    if (!values.date) {
      errors.date = "*Required";
    }
    if (!values.location) {
      errors.location = "*Required";
    }
    if (!selectedIns) {
      errors.selectedIns = "*Required";
    }
    return errors;
  };

  const {
    getFieldProps,
    handleSubmit,
    errors,
    setValues,
    setErrors,
    resetForm,
  } = useFormik({
    initialValues: {
      classname: "",
      date: "",
      location: "",
      noOfSpots: 0,
      students: [],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      axiosInstance
        .put(
          `/class/update/${selectedClass?._id}`,
          {
            classname: values.classname,
            date: values.date,
            location: values.location,
            noOfSpots: values.noOfSpots,
            instructor: selectedIns?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setSelectedIns(null);
          resetForm();
          dispatch(get_Class());
          setShowAlert({
            show: true,
            message: "Class Updated Successfully",
            success: true,
          });
          setEdit(false);
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Error updating class",
            success: false,
          });
        });
    },
  });

  useEffect(() => {
    setSelectedIns({
      value: selectedClass?.instructorId,
      label:
        selectedClass?.instructorName + "(" + selectedClass?.instructorId + ")",
    });
    setValues({
      classname: selectedClass?.classname,
      date: selectedClass?.date,
      location: selectedClass?.location,
      noOfSpots: selectedClass?.noOfSpots,
      students: [],
    });
    setErrors({});
  }, [selectedClass, setValues]);

  const deleteClass = (e) => {
    e.preventDefault();
    axiosInstance
      .delete(`/class/delete/${selectedClass?._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setSelectedIns(null);
        resetForm();
        dispatch(get_Class());
        setShowAlert({
          show: true,
          message: "Class Deleted Successfully",
          success: true,
        });
        setEdit(false);
      })
      .catch(() => {
        setShowAlert({
          show: true,
          message: "Error deleting class",
          success: false,
        });
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center text-lg font-bold text-gray-3"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <div className="w-full lg:w-5/12">
            <input
              type="text"
              placeholder="Class Name DropDown"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("classname")}
            />

            {errors.classname ? (
              <div className="w-full text-xs text-red-400">
                {errors.classname}
              </div>
            ) : null}
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-client p-4 w-full rounded-xl">
              <Select
                placeholder="Select Instructor"
                className="w-full"
                options={options}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "lightgray",
                    primary: "#BA0913",
                  },
                })}
                value={selectedIns}
                onChange={(selectedOption) => {
                  setSelectedIns(selectedOption);
                  setErrors({ ...errors, selectedIns: "" });
                }}
              />
            </div>

            {errors.selectedIns ? (
              <div className="w-full text-xs text-red-400">
                {errors.selectedIns}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <div className="w-full lg:w-5/12">
            <input
              type="datetime-local"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("date")}
            />
            {errors.date ? (
              <div className="w-full text-xs text-red-400">{errors.date}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-5/12">
            <input
              type="text"
              placeholder="Location DropDown"
              className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("location")}
            />
            {errors.location ? (
              <div className="w-full text-xs text-red-400">
                {errors.location}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <div className="w-full lg:w-5/12">
            <input
              type="number"
              placeholder="Number of Spots"
              className="bg-client p-5 w-full  mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
              {...getFieldProps("noOfSpots")}
            />
          </div>
          <div className="w-full lg:w-5/12">
            <input
              type="number"
              placeholder="Number of Spots"
              className="bg-client invisible p-5 w-full  mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
          </div>
        </div>
        <div className="flex justify-around w-1/2">
          <button
            onClick={(e) => {
              deleteClass(e);
            }}
            className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          >
            DELETE CLASS
          </button>

          <button
            type="submit"
            className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
          >
            EDIT CLASS
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditClass;
