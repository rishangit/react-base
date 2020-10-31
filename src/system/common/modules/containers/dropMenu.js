import styled, { css } from 'styled-components';

const DropMenu = styled.div`
  margin: -1px;
  overflow: hidden;
  min-height: 2rem;
  position: absolute;
  top: 0;
  border-width: 1px;
  border-style: solid;
  ${({
    theme: { color, radius, padding, width },
    top,
    right,
    width: contentWidth,
    padding: contentPadding,
  }) => css`
    width: ${contentWidth ? contentWidth : width.dropMenuMedium};
    border-color: ${color.border};
    border-radius: ${radius.medium};
    background-color: ${color.light};
    z-index: 1;
    padding: ${contentPadding ? contentPadding : padding.dropMenu};
    ${top &&
    css`
      top: ${top};
    `}
    ${right &&
    css`
      right: ${right};
    `}
  `}
`;

const DropOption = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  ${({ theme: { height, color, padding } }) => css`
    min-height: ${height.options};
    /* margin-left: -${padding.dropMenu};
    margin-right: -${padding.dropMenu}; */
    padding-left: ${padding.dropMenu};
    padding-right: ${padding.dropMenu};
    &:hover {
      background-color: ${color.positiveLightXX};
      color: ${color.positive};
    }
  `}

  ${({ theme: { color }, danger }) =>
    danger &&
    css`
      color: ${color.danger};
      &:hover {
        background-color: ${color.dangerLightX};
        color: ${color.danger};
      }
    `}
`;

export { DropMenu, DropOption };
