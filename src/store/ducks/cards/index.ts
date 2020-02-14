import { Reducer } from 'redux';
import { CardsState, CardsTypes } from './types';

const INITIAL_STATE: CardsState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<CardsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsTypes.SET_CARDS_INFO:
      return { ...state, loading: false, error: false, data: action.payload.data };
    default:
      return state;
  }
}


export default reducer;
