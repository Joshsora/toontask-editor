import React from 'react';
import { connect } from 'react-redux';
import { Button, Popup } from 'semantic-ui-react';

import Tier from '../tiers/Tier';
import TierOrderModal from '../tiers/TierOrderModal';
import * as TiersActions from '../../actions/TiersActions';

import '../../../css/TasksTab.scss';

function loadStore(store) {
  return {
    tasks: store.tasks.tasks,
    tiers: store.tiers.tiers
  };
}

@connect(loadStore)
class TasksTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orderModalOpen: false };

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.openOrderModal = this.openOrderModal.bind(this);
    this.closeOrderModal = this.closeOrderModal.bind(this);
    this.onChangeTierOrder = this.onChangeTierOrder.bind(this);
  }

  onClickAdd() {
    this.props.dispatch(TiersActions.CreateNewTier());
  }

  onClickDelete(id) {
    this.props.dispatch(TiersActions.DeleteTier(id));
  }

  onChangeTitle(id, ev, input) {
    this.props.dispatch(TiersActions.ChangeTierTitle(id, input.value));
  }

  onChangeNote(id, ev, input) {
    this.props.dispatch(TiersActions.ChangeTierNote(id, input.value));
  }

  onChangeTierOrder({oldIndex, newIndex}) {
    this.props.dispatch(TiersActions.ChangeTierOrder(oldIndex, newIndex));
  }

  openOrderModal() {
    this.setState({ orderModalOpen: true });
  }

  closeOrderModal() {
    this.setState({ orderModalOpen: false });
  }

  render() {
    let tiers = this.props.tiers.map(tier => (
      <Tier
        key={`tier-${tier.id}`}
        id={tier.id}
        title={tier.title}
        note={tier.note}
        onClickDelete={this.onClickDelete}
        onChangeTitle={this.onChangeTitle}
        onChangeNote={this.onChangeNote}
      />
    ));

    return (
      <x-tasks-content>
        <Popup
          trigger={
            <Button
              onClick={this.onClickAdd}
              icon='plus'
              content='Add New Tier'
              positive
            />
          }
          content='Create a new tasking chapter'
          position='bottom left'
          inverted
        />

        <Popup
          trigger={
            <Button
              onClick={this.openOrderModal}
              icon='ordered list'
              content='Change Tier Order'
              primary
            />
          }
          content='Change the chapter order'
          position='bottom left'
          inverted
        />

        <x-tier-list>
          {tiers}
        </x-tier-list>

        <TierOrderModal
          open={this.state.orderModalOpen}
          onClose={this.closeOrderModal}
          onSortEnd={this.onChangeTierOrder}
          tiers={this.props.tiers}
        />
      </x-tasks-content>
    );
  }
}

export default TasksTab;
