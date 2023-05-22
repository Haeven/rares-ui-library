import styled from 'styled-components';
import {
  variant,
  color,
  typography,
  TypographyProps as StyledSystemTypographyProps,
  space,
  SpaceProps,
} from 'styled-system';

export const headingStyles = {
  H1: {
    fontSize: [56, null, null, 72],
    lineHeight: '120%',
    fontWeight: 700,
  },
  H2: {
    fontSize: [24, null, null, 36],
    lineHeight: '130%',
    fontWeight: 700,
  },
  H3: {
    fontSize: [18, null, null, 24],
    lineHeight: '130%',
    fontWeight: 700,
  },
  H4: {
    fontSize: [16, null, null, 18],
    lineHeight: '140%',
    fontWeight: 700,
  },
  H5: {
    fontSize: [14, null, null, 16],
    lineHeight: '140%',
    fontWeight: 700,
  },
  H6: {
    fontSize: [12, null, null, 14],
    lineHeight: '140%',
    fontWeight: 700,
  },
};

export const bodyStyles = {
  BodyXL: {
    fontSize: [18, null, null, 24],
    lineHeight: '130%',
  },
  BodyL: {
    fontSize: [16, null, null, 18],
    lineHeight: '150%',
  },
  BodyM: {
    fontSize: [14, null, null, 16],
    lineHeight: '150%',
  },
  BodyS: {
    fontSize: [12, null, null, 14],
    lineHeight: '160%',
  },
  BodyXS: {
    fontSize: [10, null, null, 12],
    lineHeight: '160%',
  },
};

const fontStyles = variant({
  prop: 'fontStyle',
  variants: {
    ...bodyStyles,
    ...headingStyles,
  },
});

interface TypographyProps extends StyledSystemTypographyProps, SpaceProps {
  color?: string;
  bold?: boolean;
  noBold?: boolean;
  inlineSize?: string;
  fontStyle?: keyof typeof headingStyles | keyof typeof bodyStyles;
  underline?: boolean;
}

const Typography = styled.p<TypographyProps>`
  padding: 0;
  margin: 0;
  ${typography}
  font-family: 'Space Grotesk', sans-serif;
  ${fontStyles}
  ${color}
  ${space}
  ${({ inlineSize }) => inlineSize && `inline-size: ${inlineSize};`}
  ${({ bold }) => bold && `font-weight: 700;`}
  ${({ noBold }) => noBold && `font-weight: 400;`}
  ${({ underline }) => underline && `text-decoration: underline;`}
`;

Typography.defaultProps = {
  fontStyle: 'BodyM',
  color: 'var(--text-primary)',
  bold: false,
};

interface HeadingProps extends Omit<TypographyProps, 'fontStyle'> {
  fontStyle: keyof typeof headingStyles;
}

/**
 * This component is the same as Typography however will render as a heading (h1, h2, h3, etc)
 */
const Heading = styled(Typography).attrs<HeadingProps>(({ fontStyle }) => ({
  as: fontStyle?.toLowerCase(),
}))<HeadingProps>``;

export { Typography, Heading };
