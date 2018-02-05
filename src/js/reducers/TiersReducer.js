import dotProp from 'dot-prop-immutable';
import Reducer from './Reducer';
import * as TiersActions from '../actions/TiersActions';

const TIERS_DEFAULT = {
  tiers: [],
  nextId: 1
};

export class TiersReducer extends Reducer {
  constructor() {
    super(TIERS_DEFAULT);
    this.defineActions({
      [TiersActions.CreateNewTier.type]: this.onCreateNewTier,
      [TiersActions.DeleteTier.type]: this.onDeleteTier,
      [TiersActions.ChangeTierTitle.type]: this.onChangeTierTitle,
      [TiersActions.ChangeTierNote.type]: this.onChangeTierNote,
      [TiersActions.ChangeTierOrder.type]: this.onChangeTierOrder
    });
  }

  onCreateNewTier(state, action) {
    return {
      tiers: [
        ...state.tiers,
        {
          id: state.nextId,
          title: `Tier #${state.nextId}`,
          note: '',
          tasks: []
        }
      ],
      nextId: state.nextId + 1
    };
  }

  onDeleteTier(state, action) {
    return {
      ...state,
      tiers: state.tiers.filter(tier => tier.id !== action.id)
    };
  }

  onChangeTierTitle(state, action) {
    let index = state.tiers.findIndex(tier => tier.id === action.id);
    return dotProp.set(state, `tiers.${index}.title`, action.title);
  }

  onChangeTierNote(state, action) {
    let index = state.tiers.findIndex(tier => tier.id === action.id);
    return dotProp.set(state, `tiers.${index}.note`, action.note);
  }

  onChangeTierOrder(state, action) {
    let movedTier = { ...state.tiers[action.oldIndex] };
    let otherTier = { ...state.tiers[action.newIndex] };
    state = dotProp.set(state, `tiers.${action.oldIndex}`, otherTier);
    return dotProp.set(state, `tiers.${action.newIndex}`, movedTier);
  }
}

export default TiersReducer;
