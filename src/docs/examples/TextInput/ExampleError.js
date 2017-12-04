import React from 'react';
import TextInput from '@source360/react-ui-kit/lib/TextInput';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}
