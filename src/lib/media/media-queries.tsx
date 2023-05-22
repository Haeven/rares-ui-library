import styled from 'styled-components';

const size = {
  desktop: 992,
  tablet: 868,
  tabletSm: 768,
  phone: 576,
};

type MediaQueryGen = (inner: TemplateStringsArray | string) => string;

const tablet: MediaQueryGen = (inner) =>
  `
    @media only screen and (max-width: ${size.tablet}px) {
      ${inner}
    }
  `;

const tabletSm: MediaQueryGen = (inner) =>
  `
    @media only screen and (max-width: ${size.tabletSm}px) {
      ${inner}
    }
  `;

const desktop: MediaQueryGen = (inner) =>
  `
    @media only screen and (min-width: ${size.desktop}px) {
      ${inner}
    }
  `;

const phone: MediaQueryGen = (inner) =>
  `
    @media only screen and (max-width: ${size.phone}px) {
      ${inner}
    }
  `;

export const HideOnMobile = styled.div`
  display: none;
  ${desktop`
    display: block;
  `}
`;

export const HideOnDesktop = styled.div`
  display: block;
  ${desktop`
    display: none;
  `}
`;

export const media = {
  size,
  tablet,
  tabletSm,
  desktop,
  phone,
};
