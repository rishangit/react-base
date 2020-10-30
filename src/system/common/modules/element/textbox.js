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
    margin: ${margin.elementSmall};
    color: ${color.textLight};

    &:hover {
      border-color: ${color.positiveLight};
      color: ${color.text};
      background-color:${color.positiveLightXX};
    }

    &::placeholder {
      opacity: 0.3; /* Firefox */
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      opacity: 0.3;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      opacity: 0.3;
    }
  `}
`;
