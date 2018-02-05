import React from 'react';
import { Modal, Button, List } from 'semantic-ui-react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import '../../../css/TierOrderModal.scss';

const SortableItem = SortableElement(({tier}) =>
  <List.Item content={tier.title}/>
);

const SortableTierList = SortableContainer(({tiers}) => {
  return (
    <List>
      {tiers.map((tier, index) => (
        <SortableItem
          key={`sortable-tier-${index}`}
          index={index}
          tier={tier}
        />
      ))}
    </List>
  );
});

class TierOrderModal extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.open}
      >
        <Modal.Header content='Change Tier Order' />
        <Modal.Content scrolling>
          {this.props.tiers.length === 0 && <p>There are no tiers.</p>}
          <SortableTierList
            tiers={this.props.tiers}
            onSortEnd={this.props.onSortEnd}
            helperClass='tierSortableHelper'
            lockAxis='y'
            lockToContainerEdges
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.onClose}
            content='OK'
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default TierOrderModal;
