import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { color, margin, fontSize } }) => css`
    color: ${color.danger};
    margin: 0 ${margin.elementSmall};
    font-size: ${fontSize.message};
  `}
`;
