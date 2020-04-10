import FeedReducer from './feedReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    feed: FeedReducer
});

export default rootReducer;
