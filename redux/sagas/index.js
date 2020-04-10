import { all } from 'redux-saga/effects';
import FeedSaga from './feed.saga';

export default function* rootSaga() {
  yield all([FeedSaga()]);
}
