import React from 'react';
import styled, { css } from 'styled-components';
import LoggedUserComponent from './user';

const Header = styled.div`
  display: flex;
  align-items: center;
  ${({ theme: { height, color, padding } }) => css`
    height: ${height.header};
    box-shadow: 0 1px 3px 0 ${color.borderLight};
    padding: 0 ${padding.container};
  `}
`;

const HeaderComponent = props => {
  return (
    <Header>
      Header
      <LoggedUserComponent />
    </Header>
  );
};

export default HeaderComponent;
