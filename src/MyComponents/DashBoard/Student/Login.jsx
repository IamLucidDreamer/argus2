import React, { useState } from "react";
import logo from "./../../../argus website/PNG/Logo Vectors.png";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { aunthenticate } from "./../../../helpers/auth";
import { useFormik } from "formik";
import Alert from "../../Components/Alert";
import axiosInstance from "../../../helpers/axiosInstance";
const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "*Required";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LogIn = ({ open, setOpen }) => {
  const history = useHistory();

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      await axiosInstance
        .post(`/signin`, values)
        .then((response) => {
          aunthenticate(response.data, () => {});
          console.log(response);
          history.push("/dashboard/student/home");
          resetForm();
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: err.response.data.error,
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <div class={open ? "block fixed top-0 z-100 overflow-hidden" : "hidden"}>
      <div className="p-32 w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black bg-opacity-80">
        <div className="w-full p-4 md:p-16 lg:p-40 bg-white rounded-3xl flex flex-col-reverse md:flex-row items-center justify-center bg-no-repeat bg-cover bg-logincar">
          <div className="content text-3xl text-center md:text-left lg:w-2/3"></div>
          <div className="w-1/3 mx-auto flex flex-col items-center">
            <button onClick={() => setOpen(false)}>
              {" "}
              {/*Close Button*/}
              <FontAwesomeIcon
                icon="window-close"
                className="text-3xl text-white bg-black fixed top-4 right-4"
              />
            </button>
            <form
              className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
              onSubmit={handleSubmit}
            >
              {showAlert.show ? (
                <Alert alert={showAlert} rmAlert={setShowAlert} />
              ) : null}
              <img src={logo} alt="Logo" className="w-20 mb-3" />

              <input
                className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
              />
              {errors.email ? (
                <div className="w-full text-xs text-red-400">
                  {errors.email}
                </div>
              ) : null}

              <input
                className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
              />
              {errors.password ? (
                <div className="w-full text-xs text-red-400">
                  {errors.password}
                </div>
              ) : null}

              <button
                className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg mt-3"
                type="submit"
              >
                Login
              </button>
              <p className="text-gray-900 font-bold text-center my-2">
                Not yet Registered ?
                <Link to="/dashboard/student/signup">
                  <span className="text-blue-500"> Register</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
