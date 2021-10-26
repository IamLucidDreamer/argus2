import { combineReducers } from 'redux';
import { clientReducer } from './reducers/adminReducer/clientReducer';
import { teamReducer } from './reducers/adminReducer/teamReducer';
import { contactReducer } from './reducers/adminReducer/contactReducer';
import { eomReducer } from './reducers/adminReducer/eomReducer';
import { testimonialReducer } from './reducers/adminReducer/testimonialReducer';
import { getUserReducer } from './reducers/authReducer/getUserReducer';
import { studentReducer } from './reducers/adminReducer/studentReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
  testimonial: testimonialReducer,
  eom: eomReducer,
  client: clientReducer,
  team: teamReducer,
  user: getUserReducer,
  students: studentReducer,
});

export default rootReducer;
