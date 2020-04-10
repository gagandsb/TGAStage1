import { combineReducers } from 'redux';
import FeedReducer from './feedReducer';


import { FEED_REDUCER_KEY } from './reducer.constants';

export default combineReducers({
  [FEED_REDUCER_KEY]: FeedReducer,
});

