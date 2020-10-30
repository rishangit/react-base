export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const loginAttempt = payload => ({ type: LOGIN_ATTEMPT, payload });
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });

export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
export const logOutAttempt = payload => ({ type: LOGOUT_ATTEMPT, payload });
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logOutSuccess = payload => ({ type: LOGOUT_SUCCESS, payload });

export const SET_USER = 'SET_USER';
export const setUser = payload => ({ type: SET_USER, payload });