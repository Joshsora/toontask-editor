import React from 'react';
import { Form } from 'semantic-ui-react';
import { EditorFields } from '../models/EditorFields';

export class BooleanEditorComponent extends React.Component {
  render() {
    return (
      <Form.Checkbox
        onChange={(ev, input) => {
          this.props.onChange(input);
        }}
        name={this.props.fieldInfo.name}
        label={this.props.fieldInfo.label}
        value={this.props.value}
      />
    );
  }
}

export class NumberEditorComponent extends React.Component {
  render() {
    let max = this.props.fieldInfo.max;
    return (
      <Form.Input
        onChange={(ev, input) => {
          this.props.onChange(input);
        }}
        type='number'
        name={this.props.fieldInfo.name}
        label={this.props.fieldInfo.label}
        value={this.props.value}
        min={this.props.fieldInfo.min}
        max={ max > 0 ? max : null }
      />
    );
  }
}

export class StringEditorComponent extends React.Component {
  render() {
    let maxLength = this.props.fieldInfo.maxLength;
    return (
      <Form.Input
        onChange={(ev, input) => {
          this.props.onChange(input);
        }}
        name={this.props.fieldInfo.name}
        label={this.props.fieldInfo.label}
        value={this.props.value}
        maxLength={ maxLength > 0 ? maxLength : null }
      />
    );
  }
}

export class EnumEditorComponent extends React.Component {
  render() {
    return (
      <Form.Dropdown
        onChange={(ev, input) => {
          this.props.onChange(input);
        }}
        name={this.props.fieldInfo.name}
        label={this.props.fieldInfo.label}
        value={this.props.value}
        fluid
        selection
        options={this.props.fieldInfo.items}
      />
    );
  }
}

const EditorFieldType2Component = {
  [EditorFields.Boolean.type]: BooleanEditorComponent,
  [EditorFields.Number.type]: NumberEditorComponent,
  [EditorFields.String.type]: StringEditorComponent,
  [EditorFields.Enum.type]: EnumEditorComponent
}

export const EditorComponents = {
  Boolean: BooleanEditorComponent,
  Number: NumberEditorComponent,
  String: StringEditorComponent,
  Enum: EnumEditorComponent
};

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.onFieldValueChanged = this.onFieldValueChanged.bind(this);
  }

  onFieldValueChanged(field) {
    this.props.onChange({
      ...this.props.data,
      [field.name]: field.value
    });
  }

  render() {
    let schema = this.props.schema;
    let fields = Object.keys(schema).map(fieldName => {
      let fieldInfo = schema[fieldName];
      let FieldTypeComponent = EditorFieldType2Component[fieldInfo.type];
      return (
        <FieldTypeComponent
          key={`${this.props.editorTargetKey}-editor-field-${fieldName}`}
          onChange={this.onFieldValueChanged}
          fieldInfo={{ ...fieldInfo, name: fieldName }}
          value={this.props.data[fieldName]}
        />
      );
    });

    return (
      <Form>
        {fields}
      </Form>
    );
  }
}

export default Editor;
