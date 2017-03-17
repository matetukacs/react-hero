import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comics from './comics';

const rootReducer = combineReducers( {comics, routing: routerReducer });

export default rootReducer;
