import React from 'react';
import { connect } from 'react-redux';
import { Button, Popup } from 'semantic-ui-react';

import Reward from './Reward';
import * as RewardsActions from '../../actions/RewardsActions';

import '../../../css/RewardsTab.scss';

function loadStore(store) {
  return {
    rewards: store.rewards.rewards
  };
}

@connect(loadStore)
class RewardsTab extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
  }

  onClickAdd() {
    this.props.dispatch(RewardsActions.NewReward());
  }

  onClickDelete(id) {
    this.props.dispatch(RewardsActions.DeleteReward(id));
  }

  onChangeTitle(id, ev, input) {
    this.props.dispatch(RewardsActions.ChangeRewardTitle(id, input.value));
  }

  onChangeType(id, ev, input) {
    this.props.dispatch(RewardsActions.ChangeRewardType(id, input.value.id));
  }

  onChangeData(id, newData) {
    this.props.dispatch(RewardsActions.ChangeRewardData(id, newData));
  }

  render() {
    let rewards = this.props.rewards.map(reward => (
      <Reward
        key={`reward-${reward.id}`}
        editorTargetKey={`reward-${reward.id}`}
        id={reward.id}
        title={reward.title}
        typeId={reward.typeId}
        data={reward.typeData}
        onClickDelete={this.onClickDelete}
        onChangeTitle={this.onChangeTitle}
        onChangeType={this.onChangeType}
        onChangeData={this.onChangeData}
      />
    ));

    return (
      <x-rewards-content>
        <Popup
          trigger={
            <Button
              onClick={this.onClickAdd}
              icon='plus'
              content='Add New Reward'
              positive
            />
          }
          content='Create a new tasking reward'
          position='bottom left'
          inverted
        />

        <x-reward-list>
          {rewards}
        </x-reward-list>
      </x-rewards-content>
    );
  }
}

export default RewardsTab;
