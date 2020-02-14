import { all, takeLatest } from 'redux-saga/effects';

import { PlansTypes } from './plans/types';
import { PricesTypes } from './prices/types';


import { loadPlans } from './plans/sagas';
import { loadPrices } from './prices/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PlansTypes.LOAD_REQUEST, loadPlans),
    takeLatest(PricesTypes.LOAD_PRICE_REQUEST, loadPrices),
  ]);
}
