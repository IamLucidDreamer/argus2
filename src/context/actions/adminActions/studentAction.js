import axiosInstance from '../../../helpers/axiosInstance';
import { GET_STUDENTS } from '../../actionTypes';

const setStudent = (data) => ({
  type: GET_STUDENTS,
  payload: data,
});

const getStudents = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/user/get-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setStudent(res.data.data));
      })
      .catch((err) => {});
  };
};

export { getStudents };
