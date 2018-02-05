import Reducer from './Reducer';

const TASKS_DEFAULT = {
  tasks: [],
  nextId: 1
};

export class TasksReducer extends Reducer {
  constructor() {
    super(TASKS_DEFAULT);
    this.defineActions({
    });
  }
}

export default TasksReducer;
