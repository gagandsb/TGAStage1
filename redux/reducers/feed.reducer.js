import { fromJS } from 'immutable';
import { GET_NEWS_FEED_COMPLETE } from '../actions/feed.actions';

const initialState = fromJS({
  feedItems: [],
});

const FeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_FEED_COMPLETE:
      return state.set('feedItems', action.payload);
    default:
      return state;
  }
};

export default FeedReducer;
