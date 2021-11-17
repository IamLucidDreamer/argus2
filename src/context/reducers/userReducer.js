import {
  COURSE_LOADING,
  GETUSERS_COURSE,
  GET_PROGRESS,
  SET_CURRENTCOURSE,
  UPADTE_CURRENTTIMESTAMP,
} from '../actionTypes';

const initialState = {
  course: [],
  progress: {},
  current: {},
  loading: false,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case SET_CURRENTCOURSE:
      return {
        ...state,
        current: action.payload,
      };
    case UPADTE_CURRENTTIMESTAMP:
      return {
        ...state,
        current: {
          ...state.current,
          currentChapter: {
            ...state.current.currentChapter,
            currentChapterTimestamp: action.payload,
          },
        },
      };
    case GETUSERS_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case COURSE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export { progressReducer };
