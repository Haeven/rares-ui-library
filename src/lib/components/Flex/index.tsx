import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  ResponsiveValue,
  system,
  border,
  BorderProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from 'styled-system';

const gap = system({
  gap: {
    property: 'gap',
  },
});

const background = system({
  background: {
    property: 'background',
    scale: 'colors',
  },
});

interface FlexProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps {
  gap?: ResponsiveValue<string>;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  background?: ResponsiveValue<string>;
  filter?: string;
  aspectRatio?: number;
  cursor?: string;
  transform?: string;
  boxSizing?: string;
  perspective?: string;
  transition?: string;
  boxShadow?: string;
}

const StyledFlex = styled.div<FlexProps>`
  ${flexbox}
  ${space}
  ${gap}
  ${border}
  ${layout}
  ${position}
  ${background}
  ${({ background }) => background && `background: ${background};`};
  ${({ filter }) => filter && `filter: ${filter};`};
  ${({ aspectRatio }) => aspectRatio && `aspect-ratio: ${aspectRatio};`};
  ${({ cursor }) => cursor && `cursor: ${cursor};`};
  ${({ transform }) => transform && `transform: ${transform};`};
  ${({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`};
  ${({ perspective }) => perspective && `perspective: ${perspective};`};
  ${({ transition }) => transition && `transition: ${transition};`};
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`};
`;

export const Flex: FCWithChildren<FlexProps> = ({
  className,
  display,
  children,
  ...props
}) => (
  <StyledFlex display={display || 'flex'} {...props} className={className}>
    {children}
  </StyledFlex>
);
