import { combineReducers } from 'redux';

import plans from './plans';
import prices from './prices';
import cards from './cards';

export default combineReducers({
  plans,
  prices,
  cards,
});
