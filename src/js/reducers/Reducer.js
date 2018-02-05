import CallableObject from '../util/CallableObject';

export class Reducer extends CallableObject {
  constructor(defaultState={}) {
    super((state=defaultState, action) => {
      // If this reducer does that have a handler for this action,
      // return the state that we entered this call with
      if (!(action.type in this.actionType2Func)) {
        return state;
      }

      // Return the new state returned from the handler function
      return this.actionType2Func[action.type](state, action);
    });

    // Create the "action type -> handler" map
    this.actionType2Func = {};
  }

  defineAction(type, handler) {
    this.actionType2Func[type] = handler.bind(this);
  }

  defineActions(actions) {
    for (var type in actions) {
      var handler = actions[type];
      this.defineAction(type, handler);
    }
  }
}

export default Reducer;
