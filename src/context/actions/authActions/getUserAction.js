import axiosInstance from '../../../helpers/axiosInstance';
import { IS_AUTH, SET_USERDETAILS } from '../../actionTypes';

const setUser = (data) => ({
  type: SET_USERDETAILS,
  payload: data,
});

const isAuthenticated = (data) => ({
  type: IS_AUTH,
  payload: data,
});

const getUser = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    const id = JSON.parse(localStorage.getItem('id'));
    dispatch(isAuthenticated('loading'));
    axiosInstance
      .get(`/user/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setUser(res.data));
        dispatch(isAuthenticated('true'));
      })
      .catch(() => {
        dispatch(isAuthenticated('false'));
      });
  };
};

export { getUser, setUser, isAuthenticated };
