import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { color } from 'styled-system';

interface StyledLinkProps {
  color?: string;
  noUnderline?: boolean;
  unstyled?: boolean;
}

const linkStyles = () => css<StyledLinkProps>`
  ${color}
  text-decoration: ${({ noUnderline }) => (noUnderline ? 'none' : 'underline')};

  &:hover {
    text-decoration: none;
  }
`;

const StyledReactRouterLink = styled(ReactRouterDomLink)<StyledLinkProps>`
  ${({ unstyled }) => !unstyled && linkStyles}
`;

const StyledNextLink = styled(NextLink)<StyledLinkProps>`
  ${({ unstyled }) => !unstyled && linkStyles}
`;

export interface LinkProps {
  to: string;
  color?: string;
  onClick?: () => void;
  isExternal?: boolean;
  noUnderline?: boolean;
  unstyled?: boolean;
}

const Link: FCWithChildren<LinkProps> = ({
  to,
  isExternal,
  color,
  children,
  ...props
}) => {
  const isSsr =
    typeof window === 'undefined' ||
    ('__NEXT_DATA__' in window && window.__NEXT_DATA__);
  if (isSsr) {
    return (
      <StyledNextLink
        href={to}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        color={color || 'inherit'}
        {...props}>
        {children}
      </StyledNextLink>
    );
  }

  return (
    <StyledReactRouterLink
      to={isExternal ? { pathname: to } : to}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      color={color || 'inherit'}
      {...props}>
      {children}
    </StyledReactRouterLink>
  );
};

export { Link };
