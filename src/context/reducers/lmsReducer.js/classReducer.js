import { ADD_CLASS, GET_CLASSES } from '../../actionTypes';

const initialState = {
  class: [],
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        class: action.payload,
      };
    case ADD_CLASS:
      return {
        ...state,
        class: [action.payload, ...state.class],
      };
    default:
      return state;
  }
};

export { classReducer };
