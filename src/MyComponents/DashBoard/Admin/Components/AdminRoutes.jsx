/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getClientCarousel } from '../../../../context/actions/adminActions/clientsAction';
import { getContact } from '../../../../context/actions/adminActions/contactAction';
import { getTeam } from '../../../../context/actions/adminActions/teamAction';
import { getTestimonial } from '../../../../context/actions/adminActions/testimonialAction';
import { getEOMAdmin } from '../../../../context/actions/adminActions/eomAction';
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../context/actions/lmsActions/userAction';
import { get_Class } from '../../../../context/actions/lmsActions/classActions';
import { get_Basket } from '../../../../context/actions/lmsActions/basketActions';

const AdminRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem('jwt'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_Class());
    dispatch(get_Basket());
    dispatch(getUsers());
    dispatch(getEOMAdmin());
    dispatch(getTestimonial());
    dispatch(getContact());
    dispatch(getClientCarousel());
    dispatch(getTeam());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {user?.isAuth === 'false' ||
          (user?.isAuth === 'true' && user?.user?.role !== 2) ||
          !token ? (
            <Redirect
              to={{
                pathname: '/dashboard/admin/login',
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )}
        </>
      )}
    />
  );
};

export default AdminRoute;
