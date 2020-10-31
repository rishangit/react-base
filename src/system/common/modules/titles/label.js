import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { color, margin, fontSize, fontFamily } }) => css`
    font-size: ${fontSize.label};
    font-weight: 100;
    font-weight: 100;
    color: ${color.dark};
    margin: ${margin.labelSmall};
  `}

  ${({ theme: { fontFamily }, thin }) =>
    thin &&
    css`
      font-family: ${fontFamily.thin};
    `}
`;
