import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  grid,
  GridProps as StyledGridProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  position,
  PositionProps,
  system,
  ResponsiveValue,
} from 'styled-system';

const gap = system({
  gap: {
    property: 'gap',
  },
});

const rowGap = system({
  rowGap: {
    property: 'rowGap',
  },
});

const columnGap = system({
  columnGap: {
    property: 'columnGap',
  },
});

interface GridProps
  extends LayoutProps,
    StyledGridProps,
    SpaceProps,
    BorderProps,
    PositionProps {
  className?: string;
  gap?: ResponsiveValue<string>;
  rowGap?: ResponsiveValue<string>;
  columnGap?: ResponsiveValue<string>;
}

const StyledGrid = styled.div<GridProps>`
  ${layout}
  ${grid}
  ${space}
  ${border}
  ${position}
  ${gap}
  ${rowGap}
  ${columnGap}
`;

export const Grid: FCWithChildren<GridProps> = ({
  className,
  display,
  children,
  ...props
}) => (
  <StyledGrid display={display || 'grid'} {...props} className={className}>
    {children}
  </StyledGrid>
);
