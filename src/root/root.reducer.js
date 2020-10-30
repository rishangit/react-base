import { combineReducers } from 'redux';

import authReducer from '../application/modules/default/auth/reducer';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
