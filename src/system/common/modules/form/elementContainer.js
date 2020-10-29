import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  width:100%;
  ${({ col }) =>
    col &&
    css`
      flex-direction: column;
    `}
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `}
`;
