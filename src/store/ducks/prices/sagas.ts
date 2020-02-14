import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { priceSuccess, priceFailure } from './actions';

export function* loadPrices(){
  try {
    const response = yield call(api.get, '/prices');

    yield put(priceSuccess(response.data));
  } catch (err) {
    yield put(priceFailure());
  }
}
