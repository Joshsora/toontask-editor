const NEW_FILE = 'NEW_FILE';
export function NewFile() {
  return {
    type: NEW_FILE
  };
}
NewFile.type = NEW_FILE;

const SAVE_FILE = 'SAVE_FILE';
export function SaveFile() {
  return {
    type: SAVE_FILE
  };
}
SaveFile.type = SAVE_FILE;
