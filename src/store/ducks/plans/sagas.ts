import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { planSuccess, planFailure } from './actions';

export function* loadPlans(){
  try {
    const response = yield call(api.get, '/plans');

    yield put(planSuccess(response.data));
  } catch (err) {
    yield put(planFailure());
  }
}
