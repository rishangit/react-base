import styled from 'styled-components';
import React from 'react';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormContainer = ({ children }) => {
  return <Form>{children}</Form>;
};

export default FormContainer;
