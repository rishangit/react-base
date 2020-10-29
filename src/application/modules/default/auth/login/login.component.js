import React from 'react';
import { Button, Label, TextBox } from 'sys/element';
import { MainTitle } from 'sys/title';
import { ElementContainer } from 'sys/form';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top:4rem;
`;

const LoginComponent = props => {
  const handleOnClick = () => {};
  return (
    <LoginContainer>
      <MainTitle >Log in</MainTitle>
      <ElementContainer col>
        {/* <Label>user name</Label> */}
        <TextBox placeholder={'User Name'} />
      </ElementContainer>
      <ElementContainer col>
        {/* <Label>password</Label> */}
        <TextBox type={'password'} placeholder={'Password'} />
      </ElementContainer>
      <div style={{ marginRight: 'auto' }}>
        <Button regular onClick={handleOnClick}>
          Loging
        </Button>
      </div>
    </LoginContainer>
  );
};

export default LoginComponent;
