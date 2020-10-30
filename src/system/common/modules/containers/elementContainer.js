import styled, { css } from 'styled-components';

const ElementContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme: { height } }) => height.elementContainer};
  ${({ col }) =>
    col &&
    css`
      flex-direction: column;
    `}
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `};
`;

export { ElementContainer };
