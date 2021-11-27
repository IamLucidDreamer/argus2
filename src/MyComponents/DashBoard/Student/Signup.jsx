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

const validate = (values) => {
  const errors = {};
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
        <div className="content text-3xl text-center md:text-left lg:w-2/3">
          <h1 className="text-5xl text-gray-700 font-bold">Argus Security</h1>
          <p>Your partners in protection</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <form
            className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
            onSubmit={handleSubmit}
          >
            {showAlert.show ? (
              <Alert alert={showAlert} rmAlert={setShowAlert} />
            ) : null}
            <img src={logo} alt="Logo" className="w-20 mb-3" />
            <GoogleLogin
              clientId="687463143304-kpg02h4gpk2ul6a4fk3fnsbpp1hg241i.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <div>
                  <GoogleButton type="dark" onClick={renderProps.onClick} />
                </div>
              )}
            />
            <FacebookLogin
              appId="2085575261607587"
              callback={responseFacebook}
              render={(renderProps) => (
                <div>
                  <FacebookLoginButton onClick={renderProps.onClick} />
                </div>
              )}
            />
            <div>Or</div>
            <input
              className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
              type="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {errors.email ? (
              <div className="w-full text-xs text-red-400">{errors.email}</div>
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
              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={28}
                    width={28}
                    radius={0}
                  />
                </div>
              ) : (
                <>SignUp</>
              )}
            </button>
            <p className="text-gray-900 font-bold text-center my-2">
              Already Registered?
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Log In
              </span>
            </p>
            <hr className="border-1 border-black w-full" />
            <p className="text-gray-900 text-center text-sm my-2">
              By clicking on signup, you acknowledge that you have read and
              accepted Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
