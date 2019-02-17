/* eslint-disable no-underscore-dangle */
import * as types from './constants';

const initialState = {
  details: null,
  is: {
    fetching: false,
    ok: false,
    error: false,
  },
};

const authReducer = (state = initialState, action) => {
  const localState = global.appStorage;
  const _state = localState ? {
    ...state,
    auth: localState.auth,
  } : state;
  let isProps;
  switch (action.type) {
    case types.LOGIN_REQUEST:
      isProps = {
        ...initialState.is,
        fetching: true,
      };
      return {
        ..._state,
        is: isProps,
      };

    case types.LOGIN_SUCCESS:
      isProps = {
        ...initialState.is,
        ok: true,
      };
      return {
        ..._state,
        is: isProps,
        auth: action.user,
      };

    case types.LOGIN_FAILURE:
      isProps = {
        ...initialState.is,
        error: true,
      };
      return {
        ..._state,
        is: isProps,
      };

    case types.SIGNUP_REQUEST:
      isProps = {
        ...initialState.is,
        fetching: true,
      };
      return {
        ..._state,
        is: isProps,
      };

    case types.SIGNUP_SUCCESS:
      isProps = {
        ...initialState.is,
        ok: true,
      };
      return {
        ..._state,
        is: isProps,
        auth: action.user,
      };

    case types.SIGNUP_FAILURE:
      isProps = {
        ...initialState.is,
        error: true,
      };
      return {
        ..._state,
        is: isProps,
      };

    case types.LOGOUT_REQUEST:
      return {
        ..._state,
      };

    case types.LOGOUT_SUCCESS:
      return initialState;

    case types.LOGOUT_FAILURE:
      return {
        ..._state,
      };

    default:
      return _state;
  }
};

export default authReducer;
export const getIsLoggedIn = (state) => {
  const {
    auth,
  } = state.auth;
  return !!auth;
};
