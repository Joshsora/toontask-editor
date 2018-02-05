import React from 'react';
import { Button, Segment, Header, Input, Label } from 'semantic-ui-react';

import DeleteTierModal from './DeleteTierModal';
import '../../../css/Tier.scss';

class Tier extends React.Component {
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
      <Segment.Group as='x-tier'>
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
            <Header sub as='div'>
              <Input
                name='note'
                value={this.props.note}
                placeholder="Enter a note..."
                onChange={(ev, input) => {
                  this.props.onChangeNote(this.props.id, ev, input);
                }}
                fluid
                transparent
              />
            </Header>
          </Header>
          <Button
            onClick={this.openDeleteModal}
            negative
            icon='remove'
            content='Delete Tier'
          />
        </Segment>
        <Header
          as='h4'
          attached
        >
          Required Tasks
          <Label
            as='a'
            icon='add'
            content='Add New Task'
          />
        </Header>
        <Segment attached>
          <p>There are no tasks.</p>
        </Segment>
        <Header
          as='h4'
          attached
        >
          Optional Tasks
          <Label
            as='a'
            icon='add'
            content='Add New Task'
          />
        </Header>
        <Segment attached>
          <p>There are no tasks.</p>
        </Segment>

        <DeleteTierModal
          open={this.state.deleteModalOpen}
          onClose={this.closeDeleteModal}
          onConfirm={() => { this.props.onClickDelete(this.props.id); }}
        />
      </Segment.Group>
    );
  }
}

export default Tier;
