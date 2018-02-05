import { combineReducers } from 'redux';

import RewardsReducer from './RewardsReducer';
import TasksReducer from './TasksReducer';
import TiersReducer from './TiersReducer';

export default combineReducers({
  rewards: new RewardsReducer(),
  tasks: new TasksReducer(),
  tiers: new TiersReducer()
});
