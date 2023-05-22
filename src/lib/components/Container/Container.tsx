import styled from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  position,
  PositionProps,
  system,
  ResponsiveValue,
  color,
  opacity,
  OpacityProps,
} from 'styled-system';

const background = system({
  background: {
    property: 'background',
    scale: 'colors',
  },
});

interface ContainerProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    OpacityProps {
  onClick?: () => void;
  background?: ResponsiveValue<string>;
  cursor?: string;
  transform?: string;
  color?: string;
  className?: string;
  WebkitTransform?: string;
  backfaceVisibility?: string;
  WebkitBackfaceVisibility?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  transition?: string;
  boxShadow?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const StyledDiv = styled.div<ContainerProps>`
  ${space}
  ${layout}
  ${border}
  ${position}
  ${background}
  ${color}
  ${opacity}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${({ transform }) => transform && `transform: ${transform};`}
  ${({ WebkitTransform }) =>
    WebkitTransform && `-webkit-transform: ${WebkitTransform};`}
  ${({ backfaceVisibility }) =>
    backfaceVisibility && `backface-visibility: ${backfaceVisibility};`}
  ${({ WebkitBackfaceVisibility }) =>
    WebkitBackfaceVisibility &&
    `-webkit-backface-visibility: ${WebkitBackfaceVisibility};`}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
`;

export const Container: FCWithChildren<ContainerProps> = ({
  className,
  children,
  ...props
}) => (
  <StyledDiv {...props} className={className}>
    {children}
  </StyledDiv>
);
