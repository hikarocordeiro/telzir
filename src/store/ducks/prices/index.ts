import { Reducer } from 'redux';
import { PricesState, PricesTypes } from './types';

const INITIAL_STATE: PricesState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<PricesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PricesTypes.LOAD_PRICE_REQUEST:
      return { ...state, loading: true };
    case PricesTypes.LOAD_PRICE_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data };
    case PricesTypes.LOAD_PRICE_FAILURE:
      return { ...state, loading: false, error: false, data: [] };
    default:
      return state;
  }
}


export default reducer;
