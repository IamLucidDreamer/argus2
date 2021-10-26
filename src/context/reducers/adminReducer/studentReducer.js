import { GET_STUDENTS } from '../../actionTypes';

const initialState = {
  students: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};

export { studentReducer };
