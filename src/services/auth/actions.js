import * as types from './constants';

export const loginRequest = userParams => ({
  type: types.LOGIN_REQUEST,
  userParams,
});

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  user,
});

export const loginFailure = () => ({
  type: types.LOGIN_FAILURE,
});


export const signupRequest = userParams => ({
  type: types.LOGIN_REQUEST,
  userParams,
});

export const signupSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  user,
});

export const signupFailure = () => ({
  type: types.LOGIN_FAILURE,
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutFailure = () => ({
  type: types.LOGOUT_FAILURE,
});
