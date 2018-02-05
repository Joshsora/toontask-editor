import React from 'react';
import { Container } from 'semantic-ui-react';

import TopMenu from './TopMenu';
import TasksTab from './tasks/TasksTab';
import RewardsTab from './rewards/RewardsTab';
import '../../css/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'tasks'
    };
    this.handleMenuStateChange = this.handleMenuStateChange.bind(this);
  }

  handleMenuStateChange(activeItem) {
    this.setState({ activeItem: activeItem });
  }

  render() {
    const activeItem = this.state.activeItem;
    return (
      <x-app>
        <TopMenu
          onStateChange={this.handleMenuStateChange}
        />
        <main>
          <Container>
            {activeItem === 'tasks' &&
              <TasksTab />
            }
            {activeItem === 'rewards' &&
              <RewardsTab />
            }
          </Container>
        </main>
      </x-app>
    );
  }
}

export default App;
