import styled from 'styled-components';
import {
  ResponsiveValue,
  space,
  SpaceProps,
  Theme,
  TLengthStyledSystem,
  position,
  PositionProps,
} from 'styled-system';

interface StyledAppBlockProps extends SpaceProps, PositionProps {
  flex?: number;
  flexDirection?: 'row' | 'column';
  display?: 'block' | 'flex';
  top?: string;
  left?: string;
  position?:
    | 'relative'
    | 'absolute'
    | 'static'
    | 'fixed'
    | 'sticky'
    | 'initial'
    | 'inherit';
}

const StyledAppBlock = styled.div<StyledAppBlockProps>`
  max-width: 1300px;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex: ${({ flex }) => flex || '0 1 auto'};
  ${position}
  ${space}
`;

interface AppBlockProps extends StyledAppBlockProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

const getPadding = (
  passedIn:
    | ResponsiveValue<
        string | number | symbol,
        Required<Theme<TLengthStyledSystem>>
      >
    | undefined,
  p:
    | ResponsiveValue<
        string | number | symbol,
        Required<Theme<TLengthStyledSystem>>
      >
    | undefined,
) => {
  switch (true) {
    case p !== undefined:
      return p;
    case passedIn !== undefined:
      return passedIn;
    default:
      return [20, 40, 60, 80];
  }
};

export const AppBlock = ({
  p,
  pt,
  pb,
  py,
  noPadding,
  children,
  ...rest
}: AppBlockProps) => {
  return (
    <StyledAppBlock
      pt={getPadding(pt, p)}
      pb={getPadding(pb, p)}
      py={pt !== undefined || pb !== undefined ? null : getPadding(py, p)}
      p={noPadding ? 0 : undefined}
      px={16}
      {...rest}>
      {children}
    </StyledAppBlock>
  );
};
