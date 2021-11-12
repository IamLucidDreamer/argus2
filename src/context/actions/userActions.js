import axiosInstance from '../../helpers/axiosInstance';
import {
  GET_PROGRESS,
  SET_CURRENTCOURSE,
  UPADTE_CURRENTSLIDE,
  UPADTE_CURRENTTIMESTAMP,
} from '../actionTypes';

const setProgress = (data) => ({
  type: GET_PROGRESS,
  payload: data,
});

const setSlide = (data) => ({
  type: UPADTE_CURRENTSLIDE,
  payload: data,
});

const setCurrentCourse = (data) => ({
  type: SET_CURRENTCOURSE,
  payload: data,
});

const setTimestamp = (data) => ({
  type: UPADTE_CURRENTTIMESTAMP,
  payload: data,
});

const token = JSON.parse(localStorage.getItem('jwt'));

const getProgress = (data) => {
  return (dispatch) => {
    axiosInstance
      .get('/progress/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setProgress(res.data.data[0]));
      });
  };
};

const updateSlide = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/progress/updateChapter', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setSlide(data.index));
      });
  };
};

const updateChapter = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/progress/updateChapter', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setProgress(res.data.data));
      });
  };
};

const updateModule = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/progress/updateModule', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setProgress(res.data.data));
      });
  };
};

const updateTimestamp = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/progress/updateTimestamp', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setTimestamp(data.time));
      });
  };
};

const updateCompletedModule = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/progress/updateCompletedModule', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setProgress(res.data.data));
      });
  };
};

const updateCompletedChapter = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/progress/updateCompletedChapter', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setProgress(res.data.data));
      });
  };
};

export {
  getProgress,
  setProgress,
  updateChapter,
  updateModule,
  updateTimestamp,
  updateCompletedModule,
  updateCompletedChapter,
  updateSlide,
  setCurrentCourse,
};
