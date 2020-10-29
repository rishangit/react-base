import { switchMap, map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { LOGIN_ATTEMPT, loginSuccess } from './auth.action';
import { httpPost } from 'httpCall';

export const epicLogin = (action$, state$) => {
  return action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'users/sign_in',
        data: payload,
      }).pipe(map(result => loginSuccess(result.response))),
    ),
  );
};

const authEpic = combineEpics(epicLogin);

export default authEpic;
