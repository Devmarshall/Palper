/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';


const selectors = {
  auth: state => state.auth,
};

function* login(action) {
  yield console.log(action);
}

function* logout(action) {
  yield console.log(action);
}

function* signup(action) {
  yield console.log(action);
}

export function* loginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

export function* logoutSaga() {
  yield takeLatest(types.LOGOUT_REQUEST, logout);
}
export function* signupSaga() {
  yield takeLatest(types.SIGNUP_REQUEST, signup);
}
