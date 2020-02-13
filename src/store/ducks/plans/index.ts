import { Reducer } from 'redux';
import { PlansState, PlansTypes } from './types';

const INITIAL_STATE: PlansState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<PlansState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlansTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case PlansTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data };
    case PlansTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: false, data: [] };
    default:
      return state;
  }
}


export default reducer;
