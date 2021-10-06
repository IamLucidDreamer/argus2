/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../../../../context/actions/authActions/getUserAction';
import { SideNav } from './SideNav';
import { TopBar } from './TopBar';

const StudentRoutes = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {user?.isAuth === 'false' ||
          (user?.isAuth === 'true' && user?.user?.role !== 1) ? (
            <Redirect
              to={{
                pathname: '/dashboard/student/signup',
                state: { from: props.location },
              }}
            />
          ) : (
            <div className="w-full flex flew-col md:flex-row ">
              <div className="bg-red-1 shadow-button-inner">
                <SideNav />
              </div>
              <div className=" w-10/12 md:w-full bg-dashboard-bg">
                <TopBar />
                <Component {...props} />
              </div>
            </div>
          )}
        </>
      )}
    />
  );
};

export default StudentRoutes;
