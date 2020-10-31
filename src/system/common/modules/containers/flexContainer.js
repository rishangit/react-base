import styled, { css } from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  ${({ right }) =>
    right &&
    css`
      margin-left: auto;
    `}
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export { FlexRow ,FlexCol };
