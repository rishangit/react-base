import React from 'react';
import { TextBox, Message } from '../element';
import { ElementContainer } from '../containers';

const FormTextBox = ({ element }) => {
  const { error, ...rest } = element;
  const onChange = () => {};
  return (
    <ElementContainer col>
      <TextBox {...rest} onChange={onChange} />
      {error && <Message>{error.message}</Message>}
    </ElementContainer>
  );
};
export default FormTextBox;
