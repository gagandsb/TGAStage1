import { GET_NEWS_FEED, getNewsFeedComplete } from '../actions/feed.actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getNewsFeedService } from '../../services/abstractors/feed.abstractor';

export function* getNewsFeedSaga(data) {
  const response = yield call(getNewsFeedService, data)
  yield put(getNewsFeedComplete(response));
}

export function* FeedSaga() {
  yield takeLatest(GET_NEWS_FEED, getNewsFeedSaga);
}

export default FeedSaga;
