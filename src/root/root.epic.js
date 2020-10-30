import { combineEpics } from 'redux-observable';

import authEpic from '../application/modules/default/auth/epic';

const rootEpic = combineEpics(authEpic);

export default rootEpic;
