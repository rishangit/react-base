import React from 'react';
import styled, { css } from 'styled-components';
import { Icon, Image, DropOption, FlexCol } from 'sys/container';
import { SmallTitle, Label } from 'sys/title';

const UserDetails = styled(FlexCol)`
  width: 100%;
  align-items: center;
  ${({ theme: { color } }) => css`
    border-bottom: 1px solid ${color.borderLight};
  `}
`;

const UserImag = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;

const UserDetailsComponent = props => {
  const { session } = props;
  return (
    <UserDetails>
      <Image alt={session.firstName} src={session.avatar} />
      <Label>{`${session.firstName} ${session.lastName}`}</Label>
      <SmallTitle>Administrator</SmallTitle>
    </UserDetails>
  );
};

export default UserDetailsComponent;
