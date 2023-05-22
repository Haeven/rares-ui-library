import { Link as ReactRouterLink } from 'react-router-dom';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/types';

const styles = () => css<{ fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: block;
`;

const StyledReactRouterLink = styled(ReactRouterLink)`
  ${styles}
`;

const StyledNextLink = styled(NextLink)`
  ${styles}
`;

export interface LinkButtonProps extends ButtonProps {
  to: string;
  isExternal?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  isExternal,
  fullWidth,
  children,
  ...props
}) => {
  const isSsr =
    typeof window === 'undefined' ||
    ('__NEXT_DATA__' in window && window.__NEXT_DATA__);
  if (isSsr) {
    return (
      <StyledNextLink
        fullWidth={fullWidth}
        href={to}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}>
        <Button fullWidth={fullWidth} {...props}>
          {children}
        </Button>
      </StyledNextLink>
    );
  }

  return (
    <StyledReactRouterLink
      fullWidth={fullWidth}
      to={isExternal ? { pathname: to } : to}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}>
      <Button fullWidth={fullWidth} {...props}>
        {children}
      </Button>
    </StyledReactRouterLink>
  );
};
