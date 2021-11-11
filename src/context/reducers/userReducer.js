import { GET_PROGRESS } from '../actionTypes';

const initialState = {
  progress: {},
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
};

export { progressReducer };
