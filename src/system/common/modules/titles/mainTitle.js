import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { color, margin } }) => css`
    font-size: 3rem;
    font-weight: 100;
    color: ${color.dark};
    margin-bottom: ${margin.medium};
  `}

  ${({ theme: { fontFamily }, thin }) =>
    thin &&
    css`
      font-family: ${fontFamily.thin};
    `}
`;
