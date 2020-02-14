import { combineReducers } from 'redux';

import plans from './plans';
import prices from './prices';

export default combineReducers({
  plans,
  prices,
});
