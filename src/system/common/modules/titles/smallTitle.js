import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { color, margin, fontFamily } }) => css`
    font-size: 0.75rem;
    font-weight: 100;
    font-weight: 100;
    color: ${color.dark};
    font-family: ${fontFamily.regular};
    margin: ${margin.labelSmall};
  `}

  ${({ theme: { fontFamily }, thin }) =>
    thin &&
    css`
      font-family: ${fontFamily.thin};
    `}
`;
