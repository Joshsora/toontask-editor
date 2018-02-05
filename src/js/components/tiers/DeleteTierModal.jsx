import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

class DeleteTierModal extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <Modal.Header content='Delete Tier'/>
        <Modal.Content>
          <p>Are you sure you want to delete this tier?</p>
          <p>You cannot undo this action, and all associated tasks will be deleted consequently.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.onClose}
            negative
            content='No'
          />
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes'
            onClick={this.props.onConfirm}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteTierModal;
