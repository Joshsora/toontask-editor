import React from 'react';
import { Button, Segment, Header, Input, Form } from 'semantic-ui-react';

import DeleteRewardModal from './DeleteRewardModal';
import '../../../css/Reward.scss';

import Editor from '../Editor';
import * as RewardTypes from '../../models/RewardTypes';

class Reward extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteModalOpen: false };
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.confirmDeleteModal = this.confirmDeleteModal.bind(this);
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  confirmDeleteModal() {
    this.props.onClickDelete(this.props.id);
  }

  render() {
    return (
      <Segment.Group as='x-reward'>
        <Segment attached='top'>
          <Header as='h3'>
            <Input
              name='title'
              value={this.props.title}
              placeholder="Enter a title..."
              onChange={(ev, input) => {
                this.props.onChangeTitle(this.props.id, ev, input);
              }}
              fluid
              transparent
            />
          </Header>
          <Button
            onClick={this.openDeleteModal}
            negative
            icon='remove'
            content='Delete Reward'
          />
        </Segment>
        <Segment attached>
          <Form>
            <Form.Dropdown
              onChange={(ev, input) => {
                this.props.onChangeType(this.props.id, ev, input);
              }}
              label='Reward Type'
              placeholder='Select Reward Type...'
              fluid
              selection
              options={RewardTypes.DropdownOptions}
              value={RewardTypes.EditorData[this.props.typeId]}
            />
          </Form>
          <br/>
          <Editor
            onChange={(newData) => {
              this.props.onChangeData(this.props.id, newData);
            }}
            targetKey={this.props.editorTargetKey}
            schema={RewardTypes.EditorData[this.props.typeId].schema}
            data={this.props.data}
          />
        </Segment>

        <DeleteRewardModal
          open={this.state.deleteModalOpen}
          onClose={this.closeDeleteModal}
          onConfirm={() => { this.props.onClickDelete(this.props.id); }}
        />
      </Segment.Group>
    );
  }
}

export default Reward;
