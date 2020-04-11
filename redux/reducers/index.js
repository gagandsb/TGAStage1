import { combineReducers } from 'redux';
import FeedReducer from './feed.reducer';
import { FEED_REDUCER_KEY } from './reducer.constants';

export default combineReducers({
  [FEED_REDUCER_KEY]: FeedReducer,
});
