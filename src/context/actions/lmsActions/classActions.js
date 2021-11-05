import axiosInstance from '../../../helpers/axiosInstance';
import {
  ADD_CLASS,
  DELETE_CLASS,
  ENROLL_CLASS,
  GET_CLASSES,
} from '../../actionTypes';

const getClass = (data) => ({
  type: GET_CLASSES,
  payload: data,
});

const addClass = (data) => ({
  type: ADD_CLASS,
  payload: data,
});

const enrollClass = (data) => ({
  type: ENROLL_CLASS,
  payload: data,
});

const deleteClass = (data) => ({
  type: DELETE_CLASS,
  payload: data,
});

const token = JSON.parse(localStorage.getItem('jwt'));

const get_Class = () => {
  return (dispatch) => {
    axiosInstance
      .get('/class/get-all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => dispatch(getClass(res?.data?.data)));
  };
};

export { get_Class, addClass };
