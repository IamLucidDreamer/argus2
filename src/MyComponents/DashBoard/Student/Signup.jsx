import React, { useState } from "react";
import logo from "./../../../argus website/PNG/Logo Vectors.png";
import { useFormik } from "formik";
import Alert from "../../Components/Alert";
import axiosInstance from "../../../helpers/axiosInstance";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";
import GoogleLogin from "react-google-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import {
  isAuthenticated,
  setUser,
} from "../../../context/actions/authActions/getUserAction";
import {
  setToken,
  setUserID,
} from "../../../context/actions/authActions/setStorageAction";
import Logo from "./../../../argus website/SVG/Logowith shadow.svg";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "*Required";
  }
  if (!values.lastname) {
    errors.lastname = "*Required";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be atleast 6 characters";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignUp = ({ setOpen }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      password: "",
      email: "",
      name: "",
      lastname: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      axiosInstance
        .post(`/signup`, values)
        .then(() => {
          axiosInstance.post("/signin", values).then((response) => {
            setLoading(false);
            dispatch(setUser(response?.data?.user));
            dispatch(setUserID(response?.data?.user?._id));
            dispatch(setToken(response?.data?.token));
            dispatch(isAuthenticated("true"));
            history.push("/dashboard/student/home");
            resetForm();
          });
        })
        .catch((err) => {
          setLoading(false);
          setShowAlert({
            show: true,
            message: err.response.data.error,
            success: false,
          });
          resetForm();
        });
    },
  });

  const googleSuccess = async (res) => {
    await axiosInstance
      .post("/googlelogin", { idToken: res.tokenId })
      .then((response) => {
        setLoading(false);
        dispatch(setUser(response?.data?.user));
        dispatch(setUserID(response?.data?.user?._id));
        dispatch(setToken(response?.data?.token));
        dispatch(isAuthenticated("true"));
        history.push("/dashboard/student/home");
      })
      .catch((err) => {
        setLoading(false);
        setShowAlert({
          show: true,
          message: err.response.data.error,
          success: false,
        });
      });
  };

  const googleFailure = () => {
    setLoading(false);
    setShowAlert({
      show: true,
      message: "Login failed try again",
      success: false,
    });
  };

  const responseFacebook = async (res) => {
    console.log(res);
    await axiosInstance
      .post("/facebooklogin", {
        userId: res.userID,
        access_token: res.accessToken,
      })
      .then((response) => {
        setLoading(false);
        dispatch(setUser(response?.data?.user));
        dispatch(setUserID(response?.data?.user?._id));
        dispatch(setToken(response?.data?.token));
        dispatch(isAuthenticated("true"));
        history.push("/dashboard/student/home");
      })
      .catch((err) => {
        setLoading(false);
        setShowAlert({
          show: true,
          message: err.response.data.error,
          success: false,
        });
      });
  };

  return (
    <div>
      <div className="p-20 h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-hero">
        <div className="w-9/12 bg-white rounded-3xl flex p-6">
          <form className="p-4 w-1/2 border-r-2 border-gray-200">
            <div>
              <div className="flex justify-between">
                <input
                  className={`w-5/12 mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className={`w-5/12 mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <label className="text-sm mt-3 text-gray-2">Date Of Birth</label>
              <input
                className={`w-full mt-1 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="date"
                placeholder="D.O.B."
              />
              <input
                className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="email"
                placeholder="Email"
              />
              <input
                className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="email"
                placeholder="Confirm Email"
              />
              <input
                className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
                type="phone-number"
                placeholder="Phone Number"
              />
            </div>
          </form>
          <div className="flex flex-col items-center justify-center w-1/2">
            <img src={Logo} alt="" className="h-40 w-40" />
            <button
              className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg my-3 mb-2"
              type="submit"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
