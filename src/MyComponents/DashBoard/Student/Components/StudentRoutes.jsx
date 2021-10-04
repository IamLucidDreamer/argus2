/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../../helpers/auth';
import { SideNav } from './SideNav';
import { TopBar } from './TopBar';

const StudentRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().user?.role === 1 ? (
          <>
            <div className="w-full flex flew-col md:flex-row">
              <div className="w-2/12 md:w-72 xl:w-96 bg-red-1 shadow-button-inner">
                <SideNav />
              </div>
              <div className="w-full bg-dashboard-bg">
                <TopBar />
                <Component {...props} />
              </div>
            </div>
          </>
        ) : (
          <>
            {console.log(isAuthenticated().user?.role === 1)}
            <Redirect
              to={{
                pathname: '/dashboard/student/signup',
                state: { from: props.location },
              }}
            />
          </>
        )
      }
    />
  );
};

export default StudentRoutes;
