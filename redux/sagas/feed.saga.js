import { GET_NEWS_FEED, GET_NEWS_FEED_COMPLETE } from '../actions/feedActions';
import { takeLatest } from 'redux-saga/effects';

export function* getNewsFeed() {
  console.log('get News Saga');
}

export function* FeedSaga() {
  yield takeLatest(GET_NEWS_FEED, getNewsFeed);
}

export default FeedSaga;
