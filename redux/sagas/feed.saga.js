import { GET_NEWS_FEED, getNewsFeedComplete } from '../actions/feed.actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getNewsFeedService } from '../../services/abstractors/feed.abstractor';

export function* getNewsFeed(data) {
  const response = yield call(getNewsFeedService, data)
  yield put(getNewsFeedComplete(response));
  console.log(response);
}

export function* FeedSaga() {
  yield takeLatest(GET_NEWS_FEED, getNewsFeed);
}

export default FeedSaga;
