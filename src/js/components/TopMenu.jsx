import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onStateChange = props.onStateChange;
    this.state = {
      activeItem: 'tasks'
    };

    this.onClickTab = this.onClickTab.bind(this);
  }

  onClickTab(event, data) {
    this.setState({ activeItem: data.name });
    this.onStateChange(data.name);
  }

  render() {
    return (
      <Menu fixed='top' tabular>
        <Menu.Item
          name='tasks'
          active={this.state.activeItem === 'tasks'}
          onClick={this.onClickTab}
          icon='exclamation'
          content='Toontasks'
        />
        <Menu.Item
          name='rewards'
          active={this.state.activeItem === 'rewards'}
          onClick={this.onClickTab}
          icon='trophy'
          content='Rewards'
        />

        <Menu floated='right' text>
          <Menu.Item>
            <Dropdown text='File'>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={this.onClickNew}
                  icon='file outline'
                  content='New'
                  description='Ctrl+N'
                />
                <Dropdown.Item
                  onClick={this.onClickSave}
                  icon='save'
                  content='Save'
                  description='Ctrl+S'
                />
                <Dropdown.Item
                  onClick={this.onClickSave}
                  icon='save'
                  content='Save As...'
                  description='Ctrl+Shift+S'
                />
                <Dropdown.Divider/>
                <Dropdown.Item
                  onClick={this.onClickOpen}
                  icon='folder outline'
                  content='Open'
                  description='Ctrl+O'
                />
                <Dropdown.Divider/>
                <Dropdown.Item
                  icon='file text outline'
                  content='Export as JSON'
                />
                <Dropdown.Item
                  icon='file code outline'
                  content='Export as Python'
                />
                <Dropdown.Divider/>
                <Dropdown.Item
                  icon='file text outline'
                  content='Import from JSON'
                />
                <Dropdown.Item
                  icon='file code outline'
                  content='Import from Python'
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>
            <Dropdown text='Help'>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={this.onClickNew}
                  content='About'
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Menu>
    )
  }
}

export default TopMenu;
