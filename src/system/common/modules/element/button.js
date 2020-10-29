import styled, { css } from 'styled-components';

export default styled.button`
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  ${({ theme: { color, height, padding, radius, fontSize, margin } }) => css`
    border-width: 1px;
    border-style: solid;
    padding: ${padding.elementSmall} ${padding.elementMedium};
    height: ${height.elementSmall};
    border-color: ${color.positive};
    border-radius: ${radius.small};
    font-size: ${fontSize.elementSmall};
    margin: ${margin.elementSmall};
  `}

  ${({ theme: { color }, regular }) =>
    regular &&
    css`
      background-color: ${color.positive};
      color: ${color.light};
      &:hover {
        border-color: ${color.positiveLight};
        background-color: ${color.positiveLight};
      }
      &:active {
        border-color: ${color.positiveDark};
        background-color: ${color.positiveDark};
      }
    `}

    ${({ theme: { color }, outline }) =>
    outline &&
    css`
      background-color: ${color.light};
      color: ${color.positive};
      &:hover {
        color: ${color.light};
        border-color: ${color.positive};
        background-color: ${color.positive};
      }
      &:active {
        border-color: ${color.positiveDark};
        background-color: ${color.positiveDark};
      }
    `}
`;
