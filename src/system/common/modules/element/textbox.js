import styled, { css } from 'styled-components';

export default styled.input.attrs(({ type = 'text', placeholder = '' }) => ({
  type,
  placeholder,
}))`
  ${({ theme: { color, height, padding, radius, fontSize, margin } }) => css`
    border-width: 1px;
    border-style: solid;
    padding: 0px ${padding.elementSmall};
    height: ${height.elementSmall};
    border-color: ${color.positive};
    border-radius: ${radius.small};
    font-size: ${fontSize.elementSmall};
    margin: ${margin.elementSmall} ${margin.elementSmall}
      ${margin.elementMedium};
    color: ${color.textLight};

    &:hover {
      border-color: ${color.positiveLight};
      color: ${color.text};
      background-color: #e8f5f5;
    }
  `}
`;
