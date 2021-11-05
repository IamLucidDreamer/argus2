import axiosInstance from '../../../helpers/axiosInstance';
import {
  ADD_BASKET,
  DELETE_BASKET,
  ENROLL_BASKET,
  GET_BASKET,
  UPDATEBASKET_STATUS,
} from '../../actionTypes';

const getBasket = (data) => ({
  type: GET_BASKET,
  payload: data,
});

const addBasket = (data) => ({
  type: ADD_BASKET,
  payload: data,
});

const enrollBasket = (data) => ({
  type: ENROLL_BASKET,
  payload: data,
});

const deleteBasket = (data) => ({
  type: DELETE_BASKET,
  payload: data,
});

const updateStatus = (data) => ({
  type: UPDATEBASKET_STATUS,
  payload: data,
});

const token = JSON.parse(localStorage.getItem('jwt'));

const get_Basket = () => {
  return (dispatch) => {
    axiosInstance
      .get('/bucket/get-all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => dispatch(getBasket(res?.data?.data)));
  };
};

const update_Status = (id) => {
  return (dispatch) => {
    axiosInstance
      .put(
        `/bucket/update-status/${id}`,
        { status: 'DOWNLOADED' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(updateStatus(id));
      });
  };
};

export { get_Basket, addBasket, updateStatus, update_Status };
