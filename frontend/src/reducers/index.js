import { combineReducers } from 'redux';
import transactions from './transactions';

const cashApp = combineReducers({
  transactions
})

export default cashApp;
