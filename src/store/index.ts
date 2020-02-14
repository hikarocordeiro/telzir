import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { PlansState } from './ducks/plans/types';
import { PricesState } from './ducks/prices/types';
import { CardsState } from './ducks/cards/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  plans: PlansState,
  prices: PricesState,
  cards: CardsState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
