import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { height, color } }) => css`
    font-size: ${height.iconMedium};
    width: ${height.iconMedium};
    height: ${height.iconMedium};
    color: ${color.text};
    svg {
      font-size: inherit;
    }
  `}

  ${({ theme: { height }, small }) =>
    small &&
    css`
      font-size: ${height.iconSmall};
      width: ${height.iconSmall};
      height: ${height.iconSmall};
    `}

    ${({ right }) =>
    right &&
    css`
      margin-left: auto;
    `}
`;
