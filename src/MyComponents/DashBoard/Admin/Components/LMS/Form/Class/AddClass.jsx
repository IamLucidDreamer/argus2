import { useFormik } from "formik";
import React, { useState } from "react";
import axiosInstance from "../../../../../../../helpers/axiosInstance";
import Select from "react-select";
import { addClass } from "../../../../../../../context/actions/lmsActions/classActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Alert from "../../../../../../Components/Alert";
import ManageClassName from "./ManageClassName";

const AddClass = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const [selectedIns, setSelectedIns] = useState(null);
  const dispatch = useDispatch();
  const instructor = useSelector((state) => state.users.instructors);
  const [showClass, setShowClass] = useState(false);
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

  const { getFieldProps, handleSubmit, errors, setErrors } = useFormik({
    initialValues: {
      classname: "",
      date: "",
      location: "",
      noOfSpots: 0,
      students: [],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem("jwt"));
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
          setShowAlert({
            show: true,
            message: "Class Added Successfully",
            success: true,
          });
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Error adding class",
            success: false,
          });
        });
    },
  });

  return (
    <div>
      <ManageClassName setShow={setShowClass} show={showClass} />
      <div className="px-11">
        {showAlert.show ? (
          <Alert alert={showAlert} rmAlert={setShowAlert} />
        ) : null}
      </div>

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
            <button
              onClick={() => setShowClass(true)}
              className="my-8 w-full bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
            >
              Manage Class / Location
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
        >
          ADD CLASS
        </button>
      </form>
    </div>
  );
};

export default AddClass;
