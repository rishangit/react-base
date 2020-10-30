import { switchMap, map, tap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import {
  LOGIN_ATTEMPT,
  loginSuccess,
  LOGOUT_ATTEMPT,
  logOutSuccess,
} from './action';
import { httpPost, httpGet } from 'httpCall';
import { apiEndPoints } from 'sys/const';

export const epicLogIn = (action$, state$) => {
  return action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: apiEndPoints.login.url,
        data: { ...apiEndPoints.login.param, ...payload },
      }).pipe(map(result => loginSuccess(result))),
    ),
  );
};

export const epicLogOut = (action$, state$) => {
  return action$.pipe(
    ofType(LOGOUT_ATTEMPT),
    switchMap(({ payload }) =>
      httpGet({
        call: apiEndPoints.logout.url,
      }).pipe(map(result => logOutSuccess(result))),
    ),
  );
};

const authEpic = combineEpics(epicLogIn, epicLogOut);

export default authEpic;
