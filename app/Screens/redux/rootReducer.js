import {combineReducers} from 'redux';
import accidentReducer from './accident/accidentReducer';
import requestReducer from './request/requestReducer';
const rootReducer = combineReducers({
  // open: openReducer,
  //   Ice: iceCreamReducer,
  user: accidentReducer,
  reques: requestReducer,
});
export default rootReducer;
