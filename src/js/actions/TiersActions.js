const CREATE_NEW_TIER = 'CREATE_NEW_TIER';
export function CreateNewTier() {
  return {
    type: CREATE_NEW_TIER
  };
}
CreateNewTier.type = CREATE_NEW_TIER;

const DELETE_TIER = 'DELETE_TIER';
export function DeleteTier(id) {
  return {
    type: DELETE_TIER,
    id: id
  };
}
DeleteTier.type = DELETE_TIER;

const CHANGE_TIER_TITLE = 'CHANGE_TIER_TITLE';
export function ChangeTierTitle(id, title) {
  return {
    type: CHANGE_TIER_TITLE,
    id: id,
    title: title
  };
}
ChangeTierTitle.type = CHANGE_TIER_TITLE;

const CHANGE_TIER_NOTE = 'CHANGE_TIER_NOTE';
export function ChangeTierNote(id, note) {
  return {
    type: ChangeTierNote.type,
    id: id,
    note: note
  };
}
ChangeTierNote.type = CHANGE_TIER_NOTE;

const CHANGE_TIER_ORDER = 'CHANGE_TIER_ORDER';
export function ChangeTierOrder(oldIndex, newIndex) {
  return {
    type: ChangeTierOrder.type,
    oldIndex: oldIndex,
    newIndex: newIndex
  };
}
ChangeTierOrder.type = CHANGE_TIER_ORDER;
