import dotProp from 'dot-prop-immutable';
import Reducer from './Reducer';
import * as RewardsActions from '../actions/RewardsActions';
import * as RewardTypes from '../models/RewardTypes';

const REWARDS_DEFAULT = {
  rewards: [],
  nextId: 1
};

export class RewardsReducer extends Reducer {
  constructor() {
    super(REWARDS_DEFAULT);
    this.defineActions({
      [RewardsActions.NewReward.type]: this.onNewReward,
      [RewardsActions.DeleteReward.type]: this.onDeleteReward,
      [RewardsActions.ChangeRewardTitle.type]: this.onChangeRewardTitle,
      [RewardsActions.ChangeRewardType.type]: this.onChangeRewardType,
      [RewardsActions.ChangeRewardData.type]: this.onChangeRewardData
    });
  }

  onNewReward(state, action) {
    return {
      rewards: [
        ...state.rewards,
        {
          id: state.nextId,
          title: `Reward #${state.nextId}`,
          typeId: RewardTypes.NoneReward.id,
          typeData: {}
        }
      ],
      nextId: state.nextId + 1
    };
  }

  onDeleteReward(state, action) {
    return {
      ...state,
      rewards: state.rewards.filter(reward => reward.id !== action.id)
    };
  }

  onChangeRewardTitle(state, action) {
    let index = state.rewards.findIndex(reward => reward.id === action.id);
    return dotProp.set(state, `rewards.${index}.title`, action.title);
  }

  onChangeRewardType(state, action) {
    let index = state.rewards.findIndex(reward => reward.id === action.id);
    let defaultValue = RewardTypes.EditorData[action.typeId].default;
    state = dotProp.set(state, `rewards.${index}.typeId`, action.typeId);
    return dotProp.set(state, `rewards.${index}.typeData`, defaultValue);
  }

  onChangeRewardData(state, action) {
    let index = state.rewards.findIndex(reward => reward.id === action.id);
    return dotProp.set(state, `rewards.${index}.typeData`, action.data);
  }
}

export default RewardsReducer;
