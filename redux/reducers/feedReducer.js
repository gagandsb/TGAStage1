import { GET_NEWS_FEED, GET_NEWS_FEED_COMPLETE } from '../actions/feedActions';

const feedReducer = (state = { feedItems: [] }, action) => {
  switch (action.type) {
    case GET_NEWS_FEED:
      return { ...state, feedItems: state.feedItems };
    case GET_NEWS_FEED_COMPLETE:
      return { ...state, feedItems: state.feedItems };
    default:
      return { ...state };
  }
};

export default feedReducer;
