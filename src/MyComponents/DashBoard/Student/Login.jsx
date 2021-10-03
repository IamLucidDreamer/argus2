import React, { useState } from 'react';
import logo from './../../../argus website/PNG/Logo Vectors.png';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { aunthenticate } from './../../../helpers/auth';
import { useFormik } from 'formik';
import Alert from '../../Components/Alert';
import axiosInstance from '../../../helpers/axiosInstance';
import Loader from 'react-loader-spinner';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FacebookLoginButton } from 'react-social-login-buttons';
import GoogleButton from 'react-google-button';

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = '*Required';
  }

  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const LogIn = ({ open, setOpen }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await axiosInstance
        .post(`/signin`, values)
        .then((response) => {
          setLoading(false);
          aunthenticate(response.data, () => {});
          history.push('/dashboard/student/home');
          resetForm();
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
      .post('/googlelogin', { idToken: res.tokenId })
      .then((response) => {
        aunthenticate(response.data, () => {});
        history.push('/dashboard/student/home');
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
    setShowAlert({
      show: true,
      message: 'Login failed try again',
      success: false,
    });
  };
  const responseFacebook = async (res) => {
    console.log(res);
    await axiosInstance
      .post('/facebooklogin', {
        userId: res.userID,
        access_token: res.accessToken,
      })
      .then((response) => {
        aunthenticate(response.data, () => {});
        history.push('/dashboard/student/home');
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
    <div class={open ? 'block fixed top-0 z-100 overflow-hidden' : 'hidden'}>
      <div className="p-32 w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black bg-opacity-80">
        <div className="w-full p-4 md:p-16 lg:p-40 bg-white rounded-3xl flex flex-col-reverse md:flex-row items-center justify-center bg-no-repeat bg-cover bg-logincar">
          <div className="content text-3xl text-center md:text-left lg:w-2/3"></div>
          <div className="w-1/3 mx-auto flex flex-col items-center">
            <button onClick={() => setOpen(false)}>
              {' '}
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
              <GoogleLogin
                clientId="687463143304-kpg02h4gpk2ul6a4fk3fnsbpp1hg241i.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
                render={(renderProps) => (
                  <GoogleButton onClick={renderProps.onClick} />
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
                {...getFieldProps('email')}
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
                {...getFieldProps('password')}
              />
              {errors.password ? (
                <div className="w-full text-xs text-red-400">
                  {errors.password}
                </div>
              ) : null}

              <button
                className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg my-3"
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
                  <>Login</>
                )}
              </button>
              <p className="text-gray-900 font-bold text-center my-2">
                Not yet Registered ?
                <span
                  onClick={() => {
                    history.push('/dashboard/student/signup');
                    setOpen(false);
                  }}
                  className="text-blue-500 cursor-pointer"
                >
                  {' '}
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
