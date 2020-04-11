import { fromJS } from 'immutable';
import { GET_NEWS_FEED, GET_NEWS_FEED_COMPLETE } from '../actions/feed.actions';

const initialState = fromJS({
  feedItems: [],
});

const FeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_FEED:
      return { ...state };
    case GET_NEWS_FEED_COMPLETE:
      return state.set('feedItems', action.payload);
    default:
      if (state instanceof Object) {
        return fromJS(state);
      }
      return state;
  }
};

export default FeedReducer;
