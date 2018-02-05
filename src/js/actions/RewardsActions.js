const NEW_REWARD = 'NEW_REWARD';
export function NewReward() {
 return {
   type: NEW_REWARD
 };
}
NewReward.type = NEW_REWARD;

const DELETE_REWARD = 'DELETE_REWARD';
export function DeleteReward(id) {
 return {
   type: DELETE_REWARD,
   id: id
 };
}
DeleteReward.type = DELETE_REWARD;

const CHANGE_REWARD_TITLE = 'CHANGE_REWARD_TITLE';
export function ChangeRewardTitle(id, title) {
  return {
    type: CHANGE_REWARD_TITLE,
    id: id,
    title: title
  };
}
ChangeRewardTitle.type = CHANGE_REWARD_TITLE;

const CHANGE_REWARD_TYPE = 'CHANGE_REWARD_TYPE';
export function ChangeRewardType(id, typeId) {
  return {
    type: CHANGE_REWARD_TYPE,
    id: id,
    typeId: typeId
  };
}
ChangeRewardType.type = CHANGE_REWARD_TYPE;

const CHANGE_REWARD_DATA = 'CHANGE_REWARD_DATA';
export function ChangeRewardData(id, newData) {
  return {
    type: CHANGE_REWARD_DATA,
    id: id,
    data: newData,
  };
}
ChangeRewardData.type = CHANGE_REWARD_DATA;
