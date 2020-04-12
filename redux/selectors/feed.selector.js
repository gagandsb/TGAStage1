import { FEED_REDUCER_KEY } from '../reducers/reducer.constants';

export const getFeedState = (state) => {
  return state[FEED_REDUCER_KEY].feedItems;
};
