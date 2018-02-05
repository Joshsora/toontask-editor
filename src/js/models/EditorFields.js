const NONE_FIELD_TYPE = 'none';
function EditorField(label, type=NONE_FIELD_TYPE) {
  return {
    type: type,
    label: label
  };
}
EditorField.type = NONE_FIELD_TYPE;

const BOOLEAN_FIELD_TYPE = 'boolean';
function BooleanEditorField(label) {
  return EditorField(label, BOOLEAN_FIELD_TYPE);
}
BooleanEditorField.type = BOOLEAN_FIELD_TYPE;

const NUMBER_FIELD_TYPE = 'number';
function NumberEditorField(label, min=0, max=0) {
  return {
    ...EditorField(label, NUMBER_FIELD_TYPE),
    min: min,
    max: max
  };
}
NumberEditorField.type = NUMBER_FIELD_TYPE;

const STRING_FIELD_TYPE = 'string';
function StringEditorField(label, maxLength=0) {
  return {
    ...EditorField(label, STRING_FIELD_TYPE),
    maxLength: maxLength
  };
}
StringEditorField.type = STRING_FIELD_TYPE;

export function EnumEditorFieldItem(text, value) {
  return {
    text: text,
    value: value
  };
}

const ENUM_FIELD_TYPE = 'enum';
function EnumEditorField(label, items) {
  return {
    ...EditorField(label, ENUM_FIELD_TYPE),
    items: items
  };
}
EnumEditorField.type = ENUM_FIELD_TYPE;

export const EditorFields = {
  Boolean: BooleanEditorField,
  Number: NumberEditorField,
  String: StringEditorField,
  Enum: EnumEditorField
};
