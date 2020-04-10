import FeedReducer from './feed.reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    feed: FeedReducer
});

export default rootReducer;
