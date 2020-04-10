import feedReducer from './feedReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    feed: feedReducer
});

export default rootReducer;
