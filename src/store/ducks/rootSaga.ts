import { all, takeLatest } from 'redux-saga/effects';

import { PlansTypes } from './plans/types';
import { loadPlans } from './plans/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PlansTypes.LOAD_REQUEST, loadPlans),
  ]);
}
