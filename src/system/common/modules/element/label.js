import styled, { css } from 'styled-components';

export default styled.label`
  text-transform: capitalize;
  ${({ theme: { color, fontSize, margin } }) => css`
    color: ${color.text};
    font-size: ${fontSize.elementLabel};
    margin:0.25rem ${margin.elementSmall} 0.05rem;
  `}
`;
