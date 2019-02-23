import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './services/auth/reducers';
import * as authTypes from './services/auth/constants';

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
});

export default (state, action) => {
  if (action.type === authTypes.LOGOUT_SUCCESS) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
