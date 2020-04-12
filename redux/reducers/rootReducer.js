import FeedReducer from './feed.reducer';
import {combineReducers} from 'redux';
import { FEED_REDUCER_KEY } from './reducer.constants';

const rootReducer = combineReducers({
  [FEED_REDUCER_KEY]: FeedReducer
});

export default rootReducer;
